"use client"

import BtnRemove from "@/components/btnRemove";
import { Machine } from "@/entities/machine";
import { useMachines } from "@/hooks/useMachines";
import { Container, Flex, Table } from "@radix-ui/themes";

export default function Page() {
  const { machines = [] } = useMachines() || {};

  return (
    <Container size={"4"} mt={"5"}>
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Apelido</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Nome técnico</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Descrição</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Imagem</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell> </Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {machines.map((machine: Machine) => (
            <Table.Row key={machine.id}>
              <Table.Cell>{machine.apelido}</Table.Cell>
              <Table.Cell>{machine.nome_tecnico}</Table.Cell>
              <Table.Cell>{machine.descricao}</Table.Cell>
              <Table.Cell>{machine.imagem}</Table.Cell>
              <Table.Cell>
                <Flex gap="1">
                    <BtnRemove id={machine.id} type="machine" />  
                </Flex>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Container>
  );
}
