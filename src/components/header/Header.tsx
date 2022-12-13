import Link from "next/link";

export const Header = () => {
  const links = [
    { id: 1, href: "/", label: "タイプ" },
    { id: 2, href: "/Experience", label: "経験値" },
  ];
  return (
    <header className="flex items-center justify-around border-0 border-b border-solid font-bold">
      <p>aiu</p>
      <nav>
        <ul className="flex space-x-12">
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
