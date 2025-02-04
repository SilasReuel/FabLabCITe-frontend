import { userType } from "@/types/userType";

export interface User {
    id: number,
    nome: string,
    senha: string,
    email: string,
    cpf: string,
    dataNascimento: string,
    tipo: userType
}