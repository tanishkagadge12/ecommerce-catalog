

import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

function Products() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "all" ||
      product.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div style={{ padding: "20px" }}>
      <h1>Products</h1>

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "10px",
          marginRight: "10px",
          marginBottom: "20px",
        }}
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        style={{
          padding: "10px",
          marginBottom: "20px",
        }}
      >
        <option value="all">All Categories</option>
        <option value="electronics">Electronics</option>
        <option value="jewelery">Jewellery</option>
        <option value="men's clothing">Men's Clothing</option>
        <option value="women's clothing">Women's Clothing</option>
      </select>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;