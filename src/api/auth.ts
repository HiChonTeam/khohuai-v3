
import http from "./http";

interface LoginInterface {
    email: string;
    password: string;
}

interface RegisterInterface {
    email: string;
    password: string;
    phone?: string;
}

export const login = (body:LoginInterface) => { 
    return http.post('/auth/login', body)
}

export const register = (body:RegisterInterface) => { 
    return http.post('/auth/register', body)
}