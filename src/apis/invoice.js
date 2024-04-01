import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useSearchParams,
} from "react-router-dom";

const swCharacters = [
  { name: "Luke Skywalker", type: "Jedi" },
  { name: "Darth Vader", type: "Sith" },
  { name: "Emperor Palpatine", type: "Sith" },
  { name: "Yoda", type: "Jedi" },
];

function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");

  const displayedCharacters = typeFilter
    ? swCharacters.filter((char) => char.type.toLowerCase() === typeFilter)
    : swCharacters;

  const charEls = displayedCharacters.map((char) => (
    <div key={char.name}>
      <h3
        style={{ color: char.type.toLowerCase() === "jedi" ? "blue" : "red" }}
      >
        Name: {char.name}
      </h3>
      <p>Type: {char.type}</p>
      <hr />
    </div>
  ));

  function genNewSearchParamString(key, value) {
    const sp = new URLSearchParams(searchParams);
    if (value === null) {
      sp.delete(key);
    } else {
      sp.set(key, value);
    }
    return `?${sp.toString()}`;
  }

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

  return (
    <main>
      <h2>Home</h2>
      <div>
        <Link to={genNewSearchParamString("type", "jedi")}>Jedi</Link>
        <Link to={genNewSearchParamString("type", "sith")}>Sith</Link>
        <Link to={genNewSearchParamString("type", null)}>Clear</Link>
      </div>
      <div>
        <button onClick={() => handleFilterChange("type", "jedi")}>Jedi</button>
        <button onClick={() => handleFilterChange("type", "sith")}>Sith</button>
        <button onClick={() => handleFilterChange("type", null)}>Clear</button>
      </div>
      <hr />
      {charEls}
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/characters" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

const vanElements = displayedVans.map((van) => (
  <div key={van.id} className="van-tile">
    <Link to={van.id} state={{ search: searchParams.toString() }}>
      <img src={van.imageUrl} />
      <div className="van-info">
        <h3>{van.name}</h3>
        <p>
          ${van.price}
          <span>/day</span>
        </p>
      </div>
      <i className={`van-type ${van.type} selected`}>{van.type}</i>
    </Link>
  </div>
));

const search = location.state?.search || "";

return (
  <div className="van-detail-container">
    <Link to={`..${search}`} relative="path" className="back-button">
      &larr; <span>Back to all vans</span>
    </Link>

    {van ? (
      <div className="van-detail">
        <img src={van.imageUrl} />
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
        <h2>{van.name}</h2>
        <p className="van-price">
          <span>${van.price}</span>/day
        </p>
        <p>{van.description}</p>
        <button className="link-button">Rent this van</button>
      </div>
    ) : (
      <h2>Loading...</h2>
    )}
  </div>
);
