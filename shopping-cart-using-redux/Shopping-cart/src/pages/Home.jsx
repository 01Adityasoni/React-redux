import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";






const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  async function fetchProductData(){
    setLoading(true);
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching product data:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProductData();
  }, []);

  return  (
    <div>
      {
        loading ? <Spinner /> : 
        products.length > 0 ? 
        (
          <div>
            {products.map ((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        ) :
        <div>
          <h2>No products found.</h2>
        </div>
      }
      </div>
  );
};



export default Home;
