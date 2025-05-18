import { Button } from "@heroui/button";

interface ButtonProps {
  styleType: "primary" | "secondary";
  text: string;
  size?: "sm" | "md" | "lg";
}

const MainButton = ({ styleType, text, size }: ButtonProps) => {
  const buttonStyles = {
    primary: "bg-primaryBlue-500 text-white hover:bg-primaryBlue-600",
    secondary: "bg-primaryBlue-500 text-white hover:bg-primaryBlue-600",
    sm: "text-sm px-4 py-2",
    md: "text-md px-6 py-3",
    lg: "text-xl px-8 py-4",
  };

  return (
    <Button
      className={`uppercase ${buttonStyles[styleType]} ${size && buttonStyles[size]}`}
      radius="none"
      size={size}
    >
      {text}
    </Button>
  );
};

export default MainButton;
