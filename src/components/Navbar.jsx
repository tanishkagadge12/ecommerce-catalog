
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        background: "#2563eb",
        padding: "15px",
        display: "flex",
        gap: "20px",
      }}
    >
      <Link to="/" style={{ color: "white" }}>
        Home
      </Link>

      <Link to="/products" style={{ color: "white" }}>
        Products
      </Link>

      <Link to="/about" style={{ color: "white" }}>
        About
      </Link>

      <Link to="/contact" style={{ color: "white" }}>
        Contact
      </Link>
    </nav>
  );
}

export default Navbar;