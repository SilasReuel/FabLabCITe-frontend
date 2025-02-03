import { User } from "@/entities/user";
import { useUsers } from "@/hooks/useUsers";
import { CopyIcon, UpdateIcon } from "@radix-ui/react-icons";
import { userType } from "@/types/userType";
import { FormEventHandler, useState } from "react";
import {
  Badge,
  Button,
  Code,
  DataList,
  Dialog,
  Flex,
  IconButton,
  RadioGroup,
} from "@radix-ui/themes";
import Link from "next/link";

export default function BtnUpdate(props: { user: User }) {
  const { updateUser } = useUsers() || {};
  const { user } = props;

  const [open, setOpen] = useState(false); 

  const handleUpdate: FormEventHandler<HTMLFormElement> = async (ev) => {
    ev.preventDefault(); 

    const formData = new FormData(ev.currentTarget);
    const newType = formData.get("tipo");
    ev.currentTarget.reset();

    const type = newType as userType;
    if (updateUser) {
      updateUser(user.id, { tipo: type });
    }

    setOpen(false);
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger>
        <Button color="amber" variant="soft" size={"1"} radius="medium">
          <UpdateIcon />
          Editar
        </Button>
      </Dialog.Trigger>

      <Dialog.Content maxWidth="450px" asChild>
        <form onSubmit={handleUpdate}>
          <Dialog.Title>Editar usuário</Dialog.Title>
          <DataList.Root>
            <DataList.Item align="center">
              <DataList.Label minWidth="88px">Tipo</DataList.Label>
              <DataList.Value>
                <Badge color="jade" variant="soft" radius="full">
                  {user.tipo}
                </Badge>
              </DataList.Value>
            </DataList.Item>
            <DataList.Item>
              <DataList.Label minWidth="88px">ID</DataList.Label>
              <DataList.Value>
                <Flex align="center" gap="2">
                  <Code variant="ghost">{user.id}</Code>
                  <IconButton
                    size="1"
                    aria-label="Copy value"
                    color="gray"
                    variant="ghost"
                  >
                    <CopyIcon />
                  </IconButton>
                </Flex>
              </DataList.Value>
            </DataList.Item>
            <DataList.Item>
              <DataList.Label minWidth="88px">Nome</DataList.Label>
              <DataList.Value>{user.name}</DataList.Value>
            </DataList.Item>
            <DataList.Item>
              <DataList.Label minWidth="88px">Email</DataList.Label>
              <DataList.Value>
                <Link href={`mailto:${user.email}`}>{user.email}</Link>
              </DataList.Value>
            </DataList.Item>
            <DataList.Item>
              <DataList.Label minWidth="88px">CPF</DataList.Label>
              <DataList.Value>
                <Flex align="center" gap="2">
                  <Code variant="ghost">{user.cpf}</Code>
                  <IconButton
                    size="1"
                    aria-label="Copy value"
                    color="gray"
                    variant="ghost"
                  >
                    <CopyIcon />
                  </IconButton>
                </Flex>
              </DataList.Value>
            </DataList.Item>
            <DataList.Item>
              <DataList.Label minWidth="88px">
                Data de nascimento
              </DataList.Label>
              <DataList.Value>
                {new Date(user.dataNascimento).toLocaleDateString()}
              </DataList.Value>
            </DataList.Item>
          </DataList.Root>

          <Dialog.Description size="2" my="4">
            Editar tipo de usuário:
          </Dialog.Description>

          <RadioGroup.Root defaultValue={user.tipo} name="tipo">
            <RadioGroup.Item value="usuario">
              <Badge color="jade">Usuário</Badge>
            </RadioGroup.Item>
            <RadioGroup.Item value="aluno">
              <Badge color="indigo">Aluno</Badge>
            </RadioGroup.Item>
            <RadioGroup.Item value="admin">
              <Badge color="tomato">Admin</Badge>
            </RadioGroup.Item>
            <Button type="submit" mt={"2"} color="iris" variant="solid">
              Salvar
            </Button>
          </RadioGroup.Root>

          <Flex gap="3" mt="4" justify="end">
            <Dialog.Close>
              <Button variant="soft" color="gray">
                Cancelar
              </Button>
            </Dialog.Close>
          </Flex>
        </form>
      </Dialog.Content>
    </Dialog.Root>
  );
}
