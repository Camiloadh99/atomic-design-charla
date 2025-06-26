import ProductCard from "../components/templates/ProductCard/ProductCard";
import product1 from "../assets/Product1.png";
import product2 from "../assets/Product2.png";

export default function ProductsPage() {
  const products = [
    {
      title: "RIA Mini Vault",
      description: "Vegan leather",
      price: 99.99,
      image: product1,
      isNew: true,
      colors: ["DarkOrange", "MediumVioletRed", "DarkTurquoise", "Black"],
      rate: 4,
      ratingsNumber: 124,
    },
    {
      title: "RIA Mini Vault",
      description: "Vegan leather",
      price: 199.99,
      image: product2,
      isNew: true,
      colors: ["Orange", "Black", "Green", "Crimson"],
      rate: 5,
      ratingsNumber: 176,
    },
    {
      title: "RIA Mini Vault",
      description: "Vegan leather",
      price: 22.99,
      image: product2,
      isNew: false,
      colors: ["Indigo", "Pink", "Black", "SeaGreen"],
      rate: 2,
      ratingsNumber: 10,
    },
  ];
  return (
    <>
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </>
  );
}
