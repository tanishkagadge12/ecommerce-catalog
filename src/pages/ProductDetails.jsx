
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) {
    return <h2>Loading...</h2>;
  }

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "900px",
        margin: "0 auto",
      }}
    >
      <img
        src={product.image}
        alt={product.title}
        style={{
          width: "250px",
          height: "250px",
          objectFit: "contain",
        }}
      />

      <h1>{product.title}</h1>

      <h2>${product.price}</h2>

      <p>
        <strong>Category:</strong> {product.category}
      </p>

      <p>
        <strong>Description:</strong> {product.description}
      </p>
    </div>
  );
}

export default ProductDetails;