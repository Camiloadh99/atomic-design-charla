import Card from "../../atoms/Card/Card";
import { Heading } from "../../atoms/Heading";
import ProductColors from "../../molecules/ProductColors/ProductColors";
import Stars from "../../molecules/Stars/Stars";
import IconButton from "../../molecules/IconButton/IconButton";
import "./style.css";

export default function ProductDescription({
  title,
  description,
  price,
  colors,
  rate,
}: {
  title: string;
  description: string;
  price: number;
  colors: string[];
  rate: number;
}) {
  return (
    <Card.Body>
      <div className="product-title-section">
        <Heading variant="h3">{title}</Heading>
        <Heading variant="h5">${price}</Heading>
      </div>
      <Heading variant="p" color="secondary">
        {description}
      </Heading>
      <div className="divider-section"></div>
      <ProductColors colors={colors} />
      <div className="divider-section card-footer">
        <Stars rate={rate} />
        <div className="card-footer-icons">
          <IconButton icon="visibility" onClick={() => {}} />
          <IconButton icon="local_mall" onClick={() => {}} />
        </div>
      </div>
    </Card.Body>
  );
}
