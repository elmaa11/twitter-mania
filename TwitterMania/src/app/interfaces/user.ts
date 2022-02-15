export interface User {
    username: string;
    name: string;
    surname:string;
    email: string;
    role: string;
    //isLogged: boolean;
}

export enum UserRole {
    Admin = 'Admin',
    User = 'User'
}

