import clsx from "clsx";

type HeadingProps = {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "xxl" | "xl" | "lg" | "sm";
  children: React.ReactNode;
  className?: string;
};

export default function Heading({
  as: Comp = "h1",
  className,
  children,
  size = "lg",
}: HeadingProps) {
  return (
    <Comp
      className={clsx(
        "font-bold leading-tight tracking-tight  text-slate-300",
        size === "xxl" && "text-7xl md:text-9xl",
        size === "xl" && "text-6xl md:text-8xl",
        size === "lg" && "text-5xl md:text-6xl",
        size === "sm" && "text-3xl md:text-4xl",
        className,
      )}
    >
      {children}
    </Comp>
  );
}