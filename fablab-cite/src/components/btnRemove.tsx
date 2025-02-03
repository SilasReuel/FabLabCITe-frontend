import { User } from "@/entities/user";
import { useUsers } from "@/hooks/useUsers";
import { Cross1Icon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";

export default function BtnRemove(props: { user: User }) {
    const { deleteUser } = useUsers() || {};
    const id: number = props.user.id;

  const handleRemove = (id: number) => {
    const confirmation = confirm("Deseja realmente excluir este usuário?");
    if (confirmation) {
      deleteUser(id);
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
