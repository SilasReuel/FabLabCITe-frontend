"use client";

import { MachinesContext } from "@/contexts/MachinesContext";
import { useContext } from "react";

export const useMachines = () => {
  const context = useContext(MachinesContext);
  if (!context) {
    throw new Error("useMachines deve ser usado dentro de um MachinesProvider");
  }
  return context;
};