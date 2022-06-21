import "./app.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Filter from "./components/Filter/Filter";
import Navbar from "./components/Navbar/Navbar";
import { useFilter } from "./context/filterContext";
import ProductCard from "./components/ProductCard/ProductCard";

function App() {
  const [products, setProducts] = useState([]);
  const { state } = useFilter();

  useEffect(() => {
    (async function () {
      try {
        const res = await axios.get("products.json");
        setProducts(res.data.products);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  const getSortedProducts = (products, sort) => {
    const sortedProducts = [...products].sort((item1, item2) =>
      sort === "lth"
        ? item1.newPrice - item2.newPrice
        : sort === "htl"
        ? item2.newPrice - item1.newPrice
        : products
    );
    return sortedProducts;
  };

  const getProductsBySize = (products, size) => {
    const sortedProducts = products.filter((product) =>
      size.length > 0 ? size.includes(product.size) : products
    );
    return sortedProducts;
  };

  const getProductsByBrand = (products, brand) => {
    const sortedProducts = products.filter((product) =>
      brand.length > 0 ? brand.includes(product.brand) : products
    );
    return sortedProducts;
  };

  const getProductsByCategory = (products, category) => {
    const sortedProducts = products.filter((product) =>
      category !== "all" ? product.idealFor === category : products
    );
    return sortedProducts;
  };
  const sortedProducts = getSortedProducts(products, state.sort);

  const productsBySize = getProductsBySize(sortedProducts, state.size);

  const productsByBrand = getProductsByBrand(productsBySize, state.brand);

  const productsByCategory = getProductsByCategory(
    productsByBrand,
    state.category
  );

  return (
    <>
      <Navbar />
      <div className="main">
        <div className="main-left">
          <Filter />
        </div>
        <div className="main-right">
          {productsByCategory &&
            productsByCategory.length > 0 &&
            productsByCategory.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
        </div>
      </div>
    </>
  );
}

export default App;
