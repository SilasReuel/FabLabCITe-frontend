"use client"

import { Machine } from "@/entities/machine";
import { MachinesService } from "@/services/Machines/machines";
import { ReactNode, useEffect, useState, createContext } from "react";

interface MachinesContextType {
    machines: Machine[];
    createMachine: (machine: Machine) => Promise<Machine>;
    updateMachine: (id: number, content: Partial<Machine>) => Promise<Machine>;
    deleteMachine: (id: number) => Promise<void>;
}

export const MachinesContext = createContext({} as MachinesContextType);

export const MachinesContextProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [machines, setMachines] = useState<Machine[]>([]);

    useEffect(() => {
        MachinesService.fetchMachines().then((data) => setMachines(data));
    }, []);

    const createMachine = async (machine: Machine) => {
        const newMachine = await MachinesService.save(machine);
        setMachines([...machines, newMachine]);
        return newMachine;
    };

    const updateMachine = async (id: number, content: Partial<Machine>) => {
        const updatedMachine = await MachinesService.updateMachine(id, content);
        setMachines(
            machines.map((machine) => (machine.id === id ? { ...machine, ...updatedMachine } : machine))
        );
        return updatedMachine;
    };

    const deleteMachine = async (id: number) => {
        await MachinesService.deleteMachine(id);
        setMachines(machines.filter((machine) => machine.id !== id));
    };

    return (
        <MachinesContext.Provider
            value={{ machines, createMachine, updateMachine, deleteMachine }}
        >
            {children}
        </MachinesContext.Provider>
    )
}