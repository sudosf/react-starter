interface ButtonProps {
  children: string;
  color?: "primary" | "secondary" | "warning" | "success";
  onClick: () => void;
}

function Button({ children, color = "primary", onClick }: ButtonProps) {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}{" "}
    </button>
  );
}

export default Button;
