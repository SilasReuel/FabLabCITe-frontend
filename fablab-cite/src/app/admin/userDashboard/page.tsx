"use client";

import { User } from "@/entities/user";
import { useUsers } from "@/hooks/useUsers";
import { Button, Container, Table } from "@radix-ui/themes";

export default function Page() {
  const { users = [], deleteUser } = useUsers() || {};

  const handleRemove = (id: number) => {
    const confirmation = confirm("Deseja realmente excluir este usuário?");
    if (confirmation) {
      deleteUser(id);
    }
  };

  return (
    <Container size={"4"} mt={"5"}>
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>CPF</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Data de nascimento</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Tipo</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {users.map((user: User) => (
            <Table.Row key={user.id}>
              <Table.RowHeaderCell>{user.name}</Table.RowHeaderCell>
              <Table.Cell>{user.email}</Table.Cell>
              <Table.Cell>{user.cpf}</Table.Cell>
              <Table.Cell>
                {new Date(user.dataNascimento).toLocaleDateString()}
              </Table.Cell>
              <Table.Cell>{user.tipo}</Table.Cell>
              <Table.Cell>
                <Button color="tomato" variant="soft" size={"2"} radius="small" onClick={() => handleRemove(user.id)}>Remover</Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Container>
  );
}
