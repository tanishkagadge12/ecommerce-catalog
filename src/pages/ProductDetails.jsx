
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
          borderRadius: "10px",
          padding: "15px",
          background: "white",
          textAlign: "center",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          height: "100%",
        }}
      >
        <img
          src={product.image}
          alt={product.title}
          style={{
            width: "150px",
            height: "150px",
            objectFit: "contain",
          }}
        />

        <h3
          style={{
            marginTop: "10px",
            fontSize: "16px",
          }}
        >
          {product.title}
        </h3>

        <p style={{ marginTop: "10px" }}>
          ₹{product.price}
        </p>

        <p>{product.category}</p>
      </div>
    </Link>
  );
}

export default ProductCard;