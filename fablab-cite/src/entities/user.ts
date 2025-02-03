import { userType } from "@/types/userType";

export interface User {
    id: number,
    name: string,
    senha: string,
    email: string,
    cpf: string,
    dataNascimento: Date,
    tipo: userType
}