export type Roles = "SUSCRIPTOR" | "ADMIN";

export interface User{
    username: string;
    password: string;
}

export interface UserResponse{
    message:string;
    toke:string;
    userId:number;
    role: Roles;
}