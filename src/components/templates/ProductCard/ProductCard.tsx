import Card from "../../atoms/Card/Card";
import ProductDescription from "../../organism/ProductDescription/ProductDescription";
import ProductImage from "../../organism/ProductImage/ProductImage";

interface Product {
  title: string;
  description: string;
  price: number;
  image: string;
  isNew?: boolean;
  colors: string[];
  rate: number;
}
interface ProductCardProps {
  products: Product[];
}
export default function ProductCard({ products }: ProductCardProps) {
  return (
    <>
      {products.map((product) => (
        <Card>
          <ProductImage image={product.image} isNew={product.isNew} />
          <ProductDescription
            title={product.title}
            description={product.description}
            price={product.price}
            colors={product.colors}
            rate={product.rate}
          />
        </Card>
      ))}
    </>
  );
}
