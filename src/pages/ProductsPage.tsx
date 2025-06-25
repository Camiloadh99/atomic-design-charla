import ProductCard from "../components/templates/ProductCard/ProductCard";

export default function ProductsPage() {
  const products = [
    {
      title: "RIA Mini Vault",
      description: "Vegan leather",
      price: 99.99,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjSyTl-9sHKwWAJsLwknGYJaI4fzDDUJfRUA&s",
      isNew: true,
      colors: ["red", "blue", "green"],
      rate: 4,
    },
    {
      title: "RIA Mini Vault",
      description: "Vegan leather",
      price: 199.99,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjSyTl-9sHKwWAJsLwknGYJaI4fzDDUJfRUA&s",
      isNew: true,
      colors: ["orange", "black", "green"],
      rate: 5,
    },
    {
      title: "RIA Mini Vault",
      description: "Vegan leather",
      price: 22.99,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjSyTl-9sHKwWAJsLwknGYJaI4fzDDUJfRUA&s",
      isNew: false,
      colors: ["orange", "pink", "black"],
      rate: 2,
    },
  ];
  return (
    <>
      {products.map((product) => (
        <ProductCard products={[product]} />
      ))}
    </>
  );
}
