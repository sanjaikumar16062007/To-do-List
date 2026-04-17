import { useEffect, useState } from "react";
import productsData from "./products.json";
import useDebounce from "./useDebounce";
import useLocalStorage from "./useLocalStorage";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);

  const [search, setSearch] = useLocalStorage("search", "");
  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  const filtered = products.filter(item =>
    item.name.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  return (
    <div className="container">
      <div className="card">

        <h2>Product Search</h2>

        <div className="input-box">
          <input
            type="text"
            placeholder="Search product..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={() => setSearch("")}>✖</button>
        </div>

        {filtered.length === 0 ? (
          <p>No Results Found</p>
        ) : (
          filtered.map((item, index) => (
            <div className="product-card" key={index}>
              {item.name}
            </div>
          ))
        )}

      </div>
    </div>
  );
}

export default App;