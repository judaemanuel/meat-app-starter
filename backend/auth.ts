import { Request, Response } from 'express';
import { User, users } from './users';

export const handleAuth = (req: Request, res: Response) => {
    const user: User = req.body;
    if (isValid(user)) {
        const dbUser: User = users[user.email];
        res.json({ name: dbUser.name, email: dbUser.email });
    } else {
        res.status(403).json({ message: 'dados inválidos' });
    }
}

function isValid(user: User): boolean {
    if (!user) {
        return false;
    }
    const dbUser = users[user.email];

    return dbUser !== undefined && dbUser.matches(user);
}
