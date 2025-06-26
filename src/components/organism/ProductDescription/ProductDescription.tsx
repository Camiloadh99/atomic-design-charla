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
  ratingsNumber,
}: {
  title: string;
  description: string;
  price: number;
  colors: string[];
  rate: number;
  ratingsNumber: number;
}) {
  return (
    <Card.Body>
      <div className="product-title-section">
        <Heading variant="h1">{title}</Heading>
        <Heading variant="h2">${price}</Heading>
      </div>
      <Heading variant="h3" color="secondary">
        {description}
      </Heading>
      <div className="divider-section"></div>
      <ProductColors colors={colors} />
      <div className="divider-section card-footer">
        <Stars rate={rate} ratingsNumber={ratingsNumber} />
        <div className="card-footer-icons">
          <IconButton icon="visibility" onClick={() => {}} />
          <IconButton icon="local_mall" onClick={() => {}} />
        </div>
      </div>
    </Card.Body>
  );
}
