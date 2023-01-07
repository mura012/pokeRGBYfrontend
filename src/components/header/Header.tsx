import { Drawer, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { links } from "libs/links";
import Link from "next/link";

export const Header = () => {
  const [opened, { toggle, close }] = useDisclosure(false);

  return (
    <header className="flex h-12 items-center justify-around border-0 border-b border-solid font-bold">
      <Drawer
        opened={opened}
        onClose={() => toggle()}
        title="PokeRGBY"
        padding="xl"
        size="xl"
      >
        <ul className="space-y-2 text-xl">
          {links.map((link) => {
            return (
              <li key={link.id}>
                <Link
                  href={link.href}
                  className="text-blue-400 hover:text-red-600"
                >
                  <div className="flex items-center">
                    <p>〇</p>
                    {link.label}
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </Drawer>
      <Burger opened={opened} onClick={toggle} className="xs:hidden">
        Open Drawer
      </Burger>

      <p>pokeRGBY</p>
      <nav>
        <ul className="hidden space-x-12 xs:flex">
          {links.map((link) => {
            return (
              <li key={link.id}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};
