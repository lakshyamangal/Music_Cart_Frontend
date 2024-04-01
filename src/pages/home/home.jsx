import { React, useEffect, useState } from "react";
import {
  BrowserRouter,
  Link,
  NavLink,
  Route,
  useLocation,
  useParams,
  useSearchParams,
} from "react-router-dom";
import styles from "./home.module.css";
import musicart from "../../assets/images/musicart.png";
import girl from "../../assets/images/girl.png";
import { getAllProducts } from "../../apis/product";

function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const location = useLocation();

  function handleFilterChange(key, value) {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }

  useEffect(() => {
    getAllProductsApi();
    console.log(searchParams);
    console.log("msin chal gaya");
  }, [searchParams]);

  useEffect(() => {
    return () => {
      console.log("main unmount ho gaya ");
      setSearchParams(new URLSearchParams());
    };
  }, []);

  const getAllProductsApi = async () => {
    try {
      const response = await getAllProducts(location.search);
      setProducts(response);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      <nav className={styles.nav}>
        <navleft className={styles.navleft}>
          <img src={musicart} />
          <p>Musicart</p>
          <p>Home</p>
          <Link>Invoice</Link>
        </navleft>
        <navright className={styles.navright}>
          <button>View Cart</button>
          <button>DR</button>
        </navright>
      </nav>
      <div className={styles.brand}>
        <img className={styles.z} src={girl} />
      </div>
      <input
        onChange={(e) => handleFilterChange("name", e.target.value)}
        placeholder="Search by product name"
      ></input>
      <div>
        <button>list</button>
        <button>grid</button>
        <select onChange={(e) => handleFilterChange("type", e.target.value)}>
          <option selected disabled>
            Headphone type
          </option>
          <option selected disabled>
            Featured
          </option>
          <option value="inEar">In-ear headphone</option>
          <option value="onEar">On-ear headphone</option>
          <option value="overEar">Over-ear headphone</option>
        </select>
        <select
          onChange={(e) => handleFilterChange("brand", e.target.value)}
          placeholder="Company"
        >
          <option selected disabled>
            Company
          </option>
          <option disabled>Featured</option>
          <option>Jbl</option>
          <option>sony</option>
        </select>
        <select
          onChange={(e) => handleFilterChange("color", e.target.value)}
          placeholder="Colour"
        >
          <option selected disabled>
            Colour
          </option>
          <option disabled>Featured</option>
          <option>Blue</option>
          <option>Black</option>
          <option>Grey</option>
          <option>White</option>
          <option>Brown</option>
          <option>Other</option>
        </select>
        <select
          onChange={(e) => handleFilterChange("priceRange", e.target.value)}
          placeholder="Price"
        >
          <option selected disabled>
            Price
          </option>
          <option disabled>Featured</option>
          <option value="0-1000">₹0-₹1000</option>
          <option value="1000-10000">₹1000-₹10000</option>
          <option value="10000-20000">₹10000-₹20000</option>
          <option value="20000-100000">₹20000-₹100000</option>
        </select>

        <select
          onChange={(e) => handleFilterChange("sortBy", e.target.value)}
          placeholder="sortby"
        >
          <option selected disabled>
            sortBy
          </option>
          <option disabled>Featured</option>
          <option value="Lowest">Price:Lowest</option>
          <option value="Highest">Price:Higest</option>
          <option value="A-Z">Name:(A-Z)</option>
          <option value="Z-A">Name:(Z-A)</option>
        </select>
      </div>
      <div className={styles.list}>
        {products &&
          products.map((product) => {
            return <div>{product.name}</div>;
          })}
      </div>
    </>
  );
}

export default Home;
