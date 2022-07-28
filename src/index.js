import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
{/* <Router>
<nav className="nav-bar">
  <div>
    <Link className="aa" to={"/"}>
      הזמנה
    </Link>
    <Link className="bb" to={"/charts"}>
      מידע
    </Link>
  </div>
</nav>
<Routes>
  <Route path={"/"} element={<App />} />
  <Route path={"/charts"} element={<Page />} />
</Routes>
</Router> */}