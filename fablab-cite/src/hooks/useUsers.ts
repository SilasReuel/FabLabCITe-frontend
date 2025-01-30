import { useContext } from "react";
import { UsersContext } from "@/contexts/UsersContext";

export const useUsers = () => {
    return useContext(UsersContext)
}