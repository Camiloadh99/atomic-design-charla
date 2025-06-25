import { Icon } from "../../atoms/Icon/Icon";
import "./style.css";

export default function IconButton({
  icon,
  onClick,
}: {
  icon: string;
  onClick: () => void;
}) {
  return (
    <div onClick={onClick} className="icon-button">
      <Icon icon={icon} />
    </div>
  );
}
