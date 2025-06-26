import { Heading } from "../../atoms/Heading";
import { Icon } from "../../atoms/Icon/Icon";
import "./style.css";

export default function Stars({
  rate,
  ratingsNumber,
}: {
  rate: number;
  ratingsNumber: number;
}) {
  return (
    <div className="stars">
      {Array.from({ length: 5 }).map((_, index) => (
        <Icon
          icon="star"
          key={index}
          color={index < rate ? "rgb(235, 184,11)" : "gray"}
          variant={index < rate ? "filled" : "outlined"}
        />
      ))}
      <Heading variant="h4" color="secondary">
        ({ratingsNumber})
      </Heading>
    </div>
  );
}
