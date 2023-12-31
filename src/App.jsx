import { createContext, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Cart from "./pages/Cart";

import Home from "./pages/Home";
import FullPizza from "./pages/FullPizza";
import NotFound from "./pages/NotFound";
import { Route, Routes } from "react-router-dom";

export const SearchContext = createContext("");

function App() {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="wrapper">
      <SearchContext.Provider value={{searchValue,setSearchValue}}>
        <Header/>

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/pizza/:id" element={<FullPizza />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
