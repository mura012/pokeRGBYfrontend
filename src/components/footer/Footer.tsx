export const Footer = () => {
  const date = new Date();
  return (
    <footer className="mt-2 border-0 border-t border-solid text-center">
      <p>© {date.getFullYear()} 武良</p>
    </footer>
  );
};
