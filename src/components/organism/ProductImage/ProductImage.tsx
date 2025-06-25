import Card from "../../atoms/Card/Card";
import Chip from "../../atoms/Chip/Chip";
import "./style.css";

export default function ProductImage({
  image,
  isNew,
}: {
  image: string;
  isNew?: boolean;
}) {
  return (
    <Card.Header>
      <img className="product-image" src={image} alt="Product" />
      <div className="product-image-overlay">
        {isNew && <Chip label="New" color="primary" />}
      </div>
    </Card.Header>
  );
}
