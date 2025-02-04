import { Machine } from "@/entities/machine";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const MachinesService = {
    async fetchMachines(): Promise<Machine[]> {
        try {
            const response = await fetch(`${apiUrl}/maquinas`)

            if (!response.ok) {
                throw new Error("Failed to fetch machines")
            }
            const data = await response.json(); 
            return data;
        } catch (error) {
            console.error("Error fetching machines: ", error)
            throw new Error()
        }
    },

    async save(body: Machine): Promise<Machine> {
        const response = await fetch (`${apiUrl}/maquinas/`, {
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(body),
        }); 
        const data: Machine = await response.json()
        return data;
    },

    async updateMachine(id: number, body: Partial<Machine>) {
        const response = await fetch(`${apiUrl}/machine/${id}`, {
            method: "PATCH",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(body)
        }); 
        const updatedMachine: Machine = await response.json()
        return updatedMachine;
    },

    async deleteMachine(id: number): Promise<void> {
        await fetch(`${apiUrl}/maquinas/${id}`, {
            method: "DELETE"
        }); 
    }
} 