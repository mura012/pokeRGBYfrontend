export const Footer = () => {
  const date = new Date();
  return (
    <footer className="flex h-12 justify-center border-0 border-t border-solid text-center">
      <p>© {date.getFullYear()} 武良</p>
    </footer>
  );
};
