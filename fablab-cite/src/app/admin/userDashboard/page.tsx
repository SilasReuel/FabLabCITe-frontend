"use client";

import BtnRemove from "@/components/btnRemove";
import BtnUpdate from "@/components/btnUpdate";
import { User } from "@/entities/user";
import { useUsers } from "@/hooks/useUsers";
import { Container, Flex, Table } from "@radix-ui/themes";

export default function Page() {
  const {users = []} = useUsers() || {};

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
            <Table.ColumnHeaderCell> </Table.ColumnHeaderCell>
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
                <Flex gap="1">
                  <BtnRemove user={user} />
                  <BtnUpdate user={user} />
                </Flex>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Container>
  );
}
