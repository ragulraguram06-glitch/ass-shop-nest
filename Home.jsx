import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="hero">
      <h1>Welcome to ShopNest</h1>
      <p>Discover amazing products at great prices.</p>

      <Link to="/products">
        <button>Shop Now</button>
      </Link>
    </section>
  );
}

export default Home;