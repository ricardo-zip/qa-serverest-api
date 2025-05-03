import { IUsers } from '../interfaces/user.interface'
import { faker, th } from '@faker-js/faker'

export default class UsersDataBuilder {
    
    private user: IUsers;

    constructor() {
        this.user = {
            name: faker.person.fullName(),
            email: faker.internet.email(),
            password: faker.internet.password(),
            administrador: faker.helpers.arrayElement(['true', 'false'])
        }
    }

    withName (name: string): UsersDataBuilder {
        this.user.name = name;
        return this;
    }

    withEmail (email: string): UsersDataBuilder {
        this.user.email = email;
        return this;
    }

    withPassword (password: string): UsersDataBuilder {
        this.user.password = password;
        return this;
    }

    withAdministrador (administrador: string): UsersDataBuilder {
        this.user.administrador = administrador;
        return this;
    }

    build(): IUsers {
        return this.user;
    }
}