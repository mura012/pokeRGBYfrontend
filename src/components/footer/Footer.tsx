export const Footer = () => {
  const date = new Date();
  return (
    <footer className="mt-2 w-screen border-0 border-t-2 border-solid text-center">
      <p>© {date.getFullYear()} 武良</p>
    </footer>
  );
};
