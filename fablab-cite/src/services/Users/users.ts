import { User } from "@/entities/user"

const apiUrl = process.env.NEXT_PUBLIC_API_URL

export const UsersService = {
    async fetchUsers(): Promise<User[]> {
        const response = await fetch(`${apiUrl}/usuarios`)
        const data = await response.json()
        if (!data) {
            throw new Error("Erro de fetching")
        } 
        return data
    },

    async save(body: Omit<User, "id">): Promise<User> {
        const response = await fetch(`${apiUrl}/usuarios`, {
            method: "POST",
            headers: { "content-type": "application/json"},
            body: JSON.stringify(body)
        })
        const data: User = await response.json()
        return data
    },

    async updateUser(id:number, body: Partial<Omit<User, "id">>): Promise<User> {
        const response = await fetch(`${apiUrl}/usuarios/${id}`, {
            method: "PATCH",
            headers: { "content-type": "application/json"},
            body: JSON.stringify(body)
        })
        const updatedUser: User = await response.json()
        return updatedUser
    },

    async deleteUser(id: number): Promise<void> {
        await fetch(`${apiUrl}/usuarios/${id}`, {
            method: "DELETE"
        })
    }
}