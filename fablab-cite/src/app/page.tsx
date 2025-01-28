import { UsersService } from "@/services/Users/users";

export default function Home() {
  UsersService.fetchUsers()

  return (
    <>
      <h1>Usuários</h1>
    </>
  );
}
