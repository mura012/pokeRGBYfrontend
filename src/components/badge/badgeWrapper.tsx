import { ReactNode } from "react";

type Prop = {
  children: ReactNode;
};

export const BadgeWrapper = ({ children }: Prop) => {
  return <div className="flex space-x-2">{children}</div>;
};
