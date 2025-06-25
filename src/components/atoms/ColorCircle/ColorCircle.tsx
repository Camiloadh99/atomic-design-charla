import "./style.css";

export default function ColorCircle({
  color,
  selected,
  onClick,
}: {
  color: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      style={{
        backgroundColor: color,
        opacity: 0.8,
        borderColor: selected ? "#000" : "transparent",
      }}
      className="color-circle"
    />
  );
}
