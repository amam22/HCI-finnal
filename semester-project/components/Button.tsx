import { ReactNode, MouseEvent } from "react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { cn } from "./lib/utils";

type ButtonProps = {
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  orange?: boolean;
  purple?: boolean;
  red?: boolean;
  className?: string;
  iconClassName?: string;
};

const Button = ({
  children,
  className,
  iconClassName,
  onClick,
}: ButtonProps) => {
  const buttonClasses = cn(
    "transition duration-300 ease-in-out",
    "group flex items-center gap-2 text-lg max-w-min whitespace-nowrap",
    "px-6 py-3 rounded-sm font-roboto font-medium",
    className
  );

  const colorStyles = {
    backgroundColor: "#09396d", // Light blue color
    hoverBackgroundColor: "rgba(0, 123, 255, 1)", // Darker blue for hover
    textColor: "#FFFFFF", // White text
    hoverTextColor: "#FFFFFF", // White text on hover
    borderColor: "rgba(0, 123, 255, 0.8)", // Light blue border
  };

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      style={{
        backgroundColor: colorStyles.backgroundColor,
        color: colorStyles.textColor,
        borderColor: colorStyles.borderColor,
        margin: "0 auto", // Jednako odstupanje s lijeve i desne strane
      }}
    >
      <span>{children}</span>{" "}
      <ChevronRightIcon
        className={cn(
          "w-3 h-3 stroke-[3] transition-transform duration-300 ease-in-out transform group-hover:translate-x-1",
          iconClassName
        )}
        style={{
          stroke: colorStyles.textColor,
        }}
      />
    </button>
  );
};

export default Button;
