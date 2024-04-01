import React from "react";
import clsx from "clsx";

type BoundedProps = {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>; // Define a type for the restProps

const Bounded = React.forwardRef<HTMLDivElement, BoundedProps>(
  ({ as: Comp = "section", className, children, ...restProps }, ref) => {
    return (
      <Comp
        ref={ref}
        className={clsx("px-4 py-10 md:px-6 md:py-14 lg:py-16", className)}
        {...restProps} // Spread the rest of the props
      >
        <div className="mx-auto w-full max-w-7xl">{children}</div>
      </Comp>
    );
  },
);

// Set default props
Bounded.defaultProps = {
  as: "section",
  className: "",
};

// Set a display name for the component
Bounded.displayName = "Bounded";

export default Bounded;
