import { Drawer, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { links } from "libs/links";
import Link from "next/link";

export const Header = () => {
  const [opened, { toggle, close }] = useDisclosure(false);

  return (
    <header className="flex h-12 items-center justify-around  bg-gray-500 font-bold">
      <Drawer
        opened={opened}
        onClose={() => toggle()}
        title="PokeRGBY"
        padding="xl"
        size="xl"
        className="bg-gray-500 text-3xl text-gray-100"
        overlayColor="white"
      >
        <ul className="space-y-2 text-xl">
          {links.map((link) => {
            return (
              <li
                key={link.id}
                className="rounded px-3 py-2 text-2xl text-gray-100 hover:bg-gray-700"
              >
                <Link
                  href={link.href}
                  className="text-blue-400 hover:text-red-600"
                >
                  <div className="flex items-center">{link.label}</div>
                </Link>
              </li>
            );
          })}
        </ul>
      </Drawer>
      <Burger
        opened={opened}
        onClick={toggle}
        className="xs:hidden"
        color="white"
      >
        Open Drawer
      </Burger>

      <p className="text-gray-100">pokeRGBY</p>
      <nav>
        <ul className="hidden space-x-12 xs:flex ">
          {links.map((link) => {
            return (
              <li key={link.id} className="h-fit ">
                <Link
                  href={link.href}
                  className="rounded px-3 py-2 text-gray-100 hover:bg-gray-700"
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};
