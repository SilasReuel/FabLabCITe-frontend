export type UserType = "usuario" | "aluno" | "admin"

export interface User {
    id: number,
    name: string,
    senha: string,
    email: string,
    cpf: string,
    dataNascimento: Date,
    tipo: UserType
}