import { Icon } from "../../atoms/Icon/Icon";

export default function Stars({ rate }: { rate: number }) {
  return (
    <div>
      {Array.from({ length: 5 }).map((_, index) => (
        <Icon
          icon="star"
          key={index}
          color={index < rate ? "rgb(235, 184,11)" : "gray"}
          variant={index < rate ? "filled" : "outlined"}
        />
      ))}
    </div>
  );
}
