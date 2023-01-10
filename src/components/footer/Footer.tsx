import Link from "next/link";

export const Footer = () => {
  const date = new Date();
  return (
    <footer className="flex h-12 items-center justify-center bg-gray-500 text-center text-gray-100">
      <p>© {date.getFullYear()}</p>
      <Link
        href="https://twitter.com/most_love08"
        className="text-blue-400 hover:text-red-600"
      >
        武良
      </Link>
    </footer>
  );
};
