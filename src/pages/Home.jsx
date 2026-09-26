

import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div
        style={{
          textAlign: "center",
          padding: "60px 20px",
          background: "linear-gradient(135deg, #2563eb, #1e40af)",
          color: "white",
        }}
      >
        <h1
          style={{
            fontSize: "48px",
            marginBottom: "20px",
          }}
        >
          Welcome to Tanishka Store
        </h1>

        <p
          style={{
            fontSize: "20px",
            maxWidth: "700px",
            margin: "0 auto 30px",
          }}
        >
          Discover amazing products from electronics,
          fashion, jewellery and more. Built with React
          and modern web technologies.
        </p>

        <Link
          to="/products"
          style={{
            background: "white",
            color: "#2563eb",
            padding: "12px 24px",
            borderRadius: "8px",
            fontWeight: "bold",
            textDecoration: "none",
          }}
        >
          Browse Products
        </Link>
      </div>

      {/* Banner Image */}
      <div
        style={{
          textAlign: "center",
          marginTop: "40px",
          padding: "20px",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200"
          alt="Online Shopping"
          style={{
            width: "100%",
            maxWidth: "1000px",
            borderRadius: "15px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
          }}
        />
      </div>

      {/* Features Section */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "20px",
          padding: "40px 20px",
        }}
      >
        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "10px",
            width: "250px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          }}
        >
          <h3>Wide Collection</h3>
          <p>Explore products from multiple categories.</p>
        </div>

        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "10px",
            width: "250px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          }}
        >
          <h3> Fast Search</h3>
          <p>Find products instantly with search and filters.</p>
        </div>

        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "10px",
            width: "250px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          }}
        >
          <h3> Responsive Design</h3>
          <p>Works smoothly on desktop and mobile devices.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;