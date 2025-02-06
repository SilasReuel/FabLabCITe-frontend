"use client";

import { Box, Container, Heading, TabNav } from "@radix-ui/themes";
import { UsersContextProvider } from "@/contexts/UsersContext";
import { usePathname } from "next/navigation";
import { MachinesContextProvider } from "@/contexts/MachinesContext";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const pathname = usePathname();

  return (
    <UsersContextProvider>
      <MachinesContextProvider>
        <Container size={"4"} hidden={false}>
          <Heading mt={"5"} ml={"3"}>
            DASHBOARD
          </Heading>

          <TabNav.Root>
            <TabNav.Link href="./userDashboard" active={pathname === "/admin/userDashboard"}>
              Usuários
            </TabNav.Link>
            <TabNav.Link href="./machineDashboard" active={pathname === "/admin/machineDashboard"}>Máquinas</TabNav.Link>
            <TabNav.Link href="./eventDashboard" active={pathname === "/admin/eventDashboard"}>Eventos</TabNav.Link>
          </TabNav.Root>
          <Box>{children}</Box>
        </Container>
      </MachinesContextProvider>
    </UsersContextProvider>
  );
}
