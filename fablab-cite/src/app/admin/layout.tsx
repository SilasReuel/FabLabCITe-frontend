"use client";

import { useRouter } from "next/navigation"; // Importando useRouter
import { Box, Container, Heading, Tabs, Text } from "@radix-ui/themes";
import { UsersContextProvider } from "@/contexts/UsersContext";
import {  useState } from "react";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter(); // Instanciando useRouter

  const [page, setPage] = useState("usuarios");

  const handleClick = (value: string) => {
    if (value === "usuarios") {
      setPage("usuarios");
      // Redireciona para a página de usuários
      router.push("/admin/userDashboard/");
    } else if (value === "maquinas") {
      setPage("maquinas");
      // Redireciona para a página de máquinas
      router.push("/admin/machineDashboard/");
    } else if (value === "eventos") {
      setPage("eventos");
      // Redireciona para a página de eventos
      router.push("/admin/eventDashboard/");
    }
  };

  return (
    <UsersContextProvider>
      <Container size={"4"} hidden={false}>
        <Heading mt={"5"} ml={"3"}>
          DASHBOARD
        </Heading>

        <Tabs.Root defaultValue={page} mt={"3"} onValueChange={(value) => handleClick(value)}>
          <Tabs.List>
            <Tabs.Trigger value="usuarios">
              <Text size="3">Usuarios</Text>
            </Tabs.Trigger>
            <Tabs.Trigger value="maquinas">
              <Text size="3">Máquinas</Text>
            </Tabs.Trigger>
            <Tabs.Trigger value="eventos">
              <Text size="3">Eventos</Text>
            </Tabs.Trigger>
          </Tabs.List>
        </Tabs.Root>
        <Box>{children}</Box>
      </Container>
    </UsersContextProvider>
  );
}
