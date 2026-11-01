import { useEffect, useState } from "react";
import axios from "axios";
import ProductGrid from "../components/ProductGrid";
import CategoryFilter from "../components/CategoryFilter";
import LoadingSpinner from "../components/LoadingSpinner";

function Products() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selected, setSelected] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://fakestoreapi.com/products"
        );

        setProducts(response.data);

        const categoryResponse = await axios.get(
          "https://fakestoreapi.com/products/categories"
        );

        setCategories(categoryResponse.data);
      } catch (err) {
        setError("Failed to fetch products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts =
    selected === "all"
      ? products
      : products.filter(
          (product) => product.category === selected
        );

  if (loading) return <LoadingSpinner />;

  if (error) return <p className="error">{error}</p>;

  return (
    <div className="container">
      <h1>Our Products</h1>

      <CategoryFilter
        categories={categories}
        selected={selected}
        onChange={setSelected}
      />

      <ProductGrid products={filteredProducts} />
    </div>
  );
}

export default Products;