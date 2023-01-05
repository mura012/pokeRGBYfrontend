import { links } from "libs/links";
import Link from "next/Link";

export const Header = () => {
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
