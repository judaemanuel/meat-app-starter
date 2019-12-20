export const config = {
    issuer: 'meat-api',
    secret: 'meat-api-password'
}

export const returnMessages = {
    unauthorized: {
        code: 401,
        message: 'Você precisa se autenticar para acessar esse recurso'
    },
    forbidden: {
        code: 403,
        message: 'Você não está autorizado a acessar esse recurso'
    },
    notFound: {
        code: 404,
        message: 'Recurso não disponível'
    }
}
