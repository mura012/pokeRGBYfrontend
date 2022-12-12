import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  color: string | undefined;
};

export const Badge = ({ children, color }: Props) => {
  console.log(color);

  return (
    <div className={`w-fit rounded-xl bg-${color} px-2 py-1 text-xs font-bold`}>
      {children}
    </div>
  );
};
