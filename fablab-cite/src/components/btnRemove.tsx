import { useMachines } from "@/hooks/useMachines";
import { useUsers } from "@/hooks/useUsers";
import { Cross1Icon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";

export default function BtnRemove(props: { id: number, type: "user" | "machine" }) {
    const { deleteUser } = useUsers() || {};
    const { deleteMachine } = useMachines() || {};
    const id: number = props.id;
    const type = props.type;

  const handleRemove = (id: number) => {
    const confirmation = confirm("Deseja realmente excluir este usuário?");
    if (confirmation) {
      if (type === "machine") deleteMachine(id);
      if (type === "user") deleteUser(id);
    }
  };

  return (
    <Button
      color="tomato"
      variant="soft"
      size={"1"}
      radius="medium"
      onClick={() => handleRemove(id)}
    >
      <Cross1Icon /> Remover
    </Button>
  );
}
