import { ReactNode } from "react";

interface ContainerProps {
  width?: string;
  children: ReactNode;
  className?: string
}

const Container = ({ width, children, className }: ContainerProps) => {
  return <div className={className} style={{ maxWidth: width, margin: "0 auto" }}>{children}</div>;
};

export default Container;
