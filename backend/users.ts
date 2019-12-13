export class User {
    constructor(
        public email: string,
        public name: string,
        public password: string) { }

    matches(another: User): boolean {
        return another !== undefined && another.email === this.email && another.password === this.password;
    }
}

export const users = {
    'juliana@themail.com' : new User('juliana@themail.com', 'Juliana', 'juliana23'),
    'amanda@themail.com' : new User('amanda@themail.com', 'Amanda', 'amanda21')
}

