import { User } from "@/entities/user";
import { UsersService } from "@/services/Users/users";
import { ReactNode, useState, createContext, useEffect } from "react";

interface UsersContextType {
  users: User[];
  createUser: (user: Omit<User, "id">) => Promise<User>;
  updateUser: (id: number, content: Partial<Omit<User, "id">>) => Promise<User>;
  deleteUser: (id: number) => Promise<void>;
}

export const UsersContext = createContext<UsersContextType | undefined>(
  {} as UsersContextType
);

export const UsersContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    UsersService.fetchUsers().then((data) => setUsers(data));
  }, []);

  const createUser = async (user: Omit<User, "id">) => {
    const newUser = await UsersService.save(user);
    setUsers([...users, newUser]);
    return newUser;
  };

  const updateUser = async (id: number, content: Partial<Omit<User, "id">>) => {
    const updatedUser = await UsersService.updateUser(id, content);
    setUsers(
      users.map((user) => (user.id === id ? { ...user, ...updatedUser } : user))
    );
    return updatedUser;
  };

  const deleteUser = async (id: number) => {
    await UsersService.deleteUser(id);
    setUsers(users.filter((user) => user.id !== id));
  }

  return (
    <UsersContext.Provider value={{ users, createUser, updateUser, deleteUser }}>
      {children}
    </UsersContext.Provider>
  );
};
