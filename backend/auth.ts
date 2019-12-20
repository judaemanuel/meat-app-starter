import { Request, Response, response } from 'express';
import { User, users } from './users';
import * as jwt from 'jsonwebtoken';

import { config, returnMessages } from './config';

export const handleAuth = (req: Request, res: Response) => {
    const user: User = req.body;
    if (isValid(user)) {
        const dbUser: User = users[user.email];
        const token = jwt.sign({ sub: dbUser.email, iss: config.issuer }, config.secret);

        res.json({ name: dbUser.name, email: dbUser.email, accessToken: token });
    } else {
        res.status(returnMessages.unauthorized.code).json({ message: returnMessages.unauthorized.message });
    }
}

function isValid(user: User): boolean {
    if (!user) {
        return false;
    }
    const dbUser = users[user.email];

    return dbUser !== undefined && dbUser.matches(user);
}

export const handleAuthz = (req: Request, res: Response, next) => {
    const token = extractToken(req);

    if (!token) {
        res.setHeader('www-authenticate', 'Bearer token_type="JWT"');
        res.status(returnMessages.notFound.code).json({ message: returnMessages.notFound.message });
    } else {
        jwt.verify(token, config.secret, (error, decoded) => {
            if (decoded) {
                next();
            } else {
                response.status(returnMessages.forbidden.code).json({ message: returnMessages.forbidden.message });
            }
        })
    }
}

function extractToken(req: Request): string {
    let token = undefined;

    if (req.headers && req.headers.authorization) {
        const parts: string[] = req.headers.authorization.split(' ')
        if (parts.length === 2 && parts[0] === 'Bearer') {
            token = parts[1];
        }
    }

    return token;
}
