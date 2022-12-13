import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  color: string | undefined;
};

export const Badge = ({ children, color }: Props) => {
  return (
    <div className={`w-fit rounded-xl ${color} px-2 py-1 text-xs font-bold`}>
      {children}
    </div>
  );
};
