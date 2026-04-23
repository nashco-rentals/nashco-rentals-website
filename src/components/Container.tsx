import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "header" | "footer" | "main";
};

export function Container({ children, className = "", as: As = "div" }: ContainerProps) {
  return (
    <As className={`mx-auto w-full max-w-7xl px-6 md:px-10 ${className}`}>{children}</As>
  );
}
