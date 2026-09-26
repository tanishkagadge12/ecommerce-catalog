
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <Link
      to={`/products/${product.id}`}
      style={{
        textDecoration: "none",
        color: "black",
      }}
    >
      <div
        style={{
          border: "1px solid #ddd",
          padding: "15px",
          width: "250px",
          borderRadius: "10px",
        }}
      >
        <img
          src={product.image}
          alt={product.title}
          width="200"
          height="200"
        />

        <h3>{product.title}</h3>

        <p>₹{product.price}</p>

        <p>{product.category}</p>
      </div>
    </Link>
  );
}

export default ProductCard;