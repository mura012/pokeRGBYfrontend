import { Drawer, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { links } from "libs/links";
import Link from "next/link";

export const Header = () => {
  const [opened, { toggle, close }] = useDisclosure(false);

  const link = links.map((link) => {
    return (
      <li key={link.id}>
        <Link href={link.href}>{link.label}</Link>
      </li>
    );
  });
  return (
    <header className="flex h-12 items-center justify-around border-0 border-b border-solid font-bold">
      <Drawer
        opened={opened}
        onClose={() => toggle()}
        title="PokeRGBY"
        padding="xl"
        size="xl"
      >
        <ul className="space-y-2 text-xl">{link}</ul>
      </Drawer>
      <Burger opened={opened} onClick={toggle} className="xs:hidden">
        Open Drawer
      </Burger>

      <p>pokeRGBY</p>
      <nav>
        <ul className="hidden space-x-12 xs:flex">{link}</ul>
      </nav>
    </header>
  );
};
