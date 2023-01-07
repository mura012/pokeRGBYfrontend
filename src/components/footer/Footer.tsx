import Link from "next/link";

export const Footer = () => {
  const date = new Date();
  return (
    <footer className="flex h-12 justify-center border-0 border-t border-solid text-center">
      <div className="flex items-center">
        <p>© {date.getFullYear()}</p>
        <Link
          href="https://twitter.com/most_love08"
          className="text-blue-400 hover:text-red-600"
        >
          武良
        </Link>
      </div>
    </footer>
  );
};
