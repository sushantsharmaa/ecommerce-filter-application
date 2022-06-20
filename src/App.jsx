import "./app.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Filter from "./components/Filter/Filter";
import Navbar from "./components/Navbar/Navbar";
import ProductCard from "./components/ProductCard/ProductCard";

function App() {
  const [products, setProducts] = useState([]);

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

  return (
    <>
      <Navbar />
      <div className="main">
        <div className="main-left">
          <Filter />
        </div>
        <div className="main-right">
          {products &&
            products.length > 0 &&
            products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
        </div>
      </div>
    </>
  );
}

export default App;
