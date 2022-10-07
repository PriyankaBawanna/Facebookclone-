import { Route } from "react-router-dom";
import HeaderDom from "./HeaderComp/HeaderMenu";

import Header from "./HeaderComp/Header";
import HomePage from "./HomePage/HomePage";
import Routers from "./Core/Index";
import "./Style.css";
function App() {
  return (
    <>
      {/* <div className="displayPage">
        <HeaderDom />
        App
        <div className="one">
          <Header />
        </div>
        <div>
          <HomePage />
        </div>
      </div> */}
      <Routers />
    </>
  );
}

export default App;
