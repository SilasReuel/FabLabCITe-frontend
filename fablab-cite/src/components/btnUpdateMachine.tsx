import { Machine } from "@/entities/machine";
import { useMachines } from "@/hooks/useMachines";
import { UpdateIcon } from "@radix-ui/react-icons";
import { Button, Dialog, Flex, Text, TextField } from "@radix-ui/themes";
import { FormEventHandler, useState } from "react";

export default function BtnUpdate(props: { machine: Machine }) {
  const { updateMachine } = useMachines();
  const { machine } = props;

  const [open, setOpen] = useState(false);

  // Adicionando estados locais para gerenciar os campos do formulário
  const [apelido, setApelido] = useState(machine.apelido);
  const [nomeTecnico, setNomeTecnico] = useState(machine.nome_tecnico);
  const [descricao, setDescricao] = useState(machine.descricao);
  const [imagem, setImagem] = useState(machine.imagem);

  const handleUpdate: FormEventHandler<HTMLFormElement> = async (ev) => {
    ev.preventDefault();

    await updateMachine(machine.id, {
      apelido,
      nome_tecnico: nomeTecnico,
      descricao,
      imagem,
    });

    setOpen(false);
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger>
        <Button color="amber" variant="soft" size="1" radius="medium">
          <UpdateIcon />
          Editar
        </Button>
      </Dialog.Trigger>

      <Dialog.Content maxWidth="450px">
        <Dialog.Title>Editar máquina</Dialog.Title>
        <form onSubmit={handleUpdate}>
          <Dialog.Description size="2" mb="4">
            Altere os campos abaixo para atualizar a máquina.
          </Dialog.Description>

          <Flex direction="column" gap="3">
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Apelido
              </Text>
              <TextField.Root
                value={apelido}
                onChange={(e) => setApelido(e.target.value)}
                placeholder="Digite o apelido da máquina"
                name="apelido"
              />
            </label>

            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Nome técnico
              </Text>
              <TextField.Root
                value={nomeTecnico}
                onChange={(e) => setNomeTecnico(e.target.value)}
                placeholder="Digite o nome técnico da máquina"
                name="nome_tecnico"
              />
            </label>

            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Descrição
              </Text>
              <TextField.Root
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
                placeholder="Digite a descrição da máquina"
                name="descricao"
              />
            </label>

            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                URL da imagem
              </Text>
              <TextField.Root
                value={imagem}
                onChange={(e) => setImagem(e.target.value)}
                placeholder="Digite a url da imagem da máquina"
                name="imagem"
              />
            </label>
          </Flex>

          <Flex gap="3" mt="4" justify="end">
            <Dialog.Close>
              <Button variant="soft" color="gray">
                Cancelar
              </Button>
            </Dialog.Close>
            <Button type="submit" color="amber" variant="soft">
              Salvar
            </Button>
          </Flex>
        </form>
      </Dialog.Content>
    </Dialog.Root>
  );
}
