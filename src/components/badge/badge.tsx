import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  color: string | undefined;
};

export const Badge = ({ children, color }: Props) => {
  return (
    <div
      className={`w-fit rounded-xl ${color} min-w-[54px] py-1 text-center text-xs font-bold`}
    >
      {children}
    </div>
  );
};
