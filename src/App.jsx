import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Link,
  Outlet,
} from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Work from "./Components/Work";
import Navbar from "./Components/Navbar";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/Work" element={<Work />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Route>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};

const Root = () => {
  return (
    <>
      <div
        className="navbar"
        style={{
          display: "flex",
          direction: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ margin: "30px 50px 50px 70px" }}>
          <Link
            style={{
              fontSize: "30px",
              letterSpacing: "0px",
              fontWeight: "bold",
              textDecoration: "none",
              color: "black",
            }}
            to="/"
          >
            {" "}
            Shivam Gupta{" "}
          </Link>
        </div>
        <div
          style={{
            margin: "30px 90px 50px 50px",
            display: "flex",
            direction: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link className="nav-el" to="/Work">
            Work
          </Link>
          <Link className="nav-el" to="/About">
            About
          </Link>
          <Link className="nav-el" to="/Contact">
            Contact
          </Link>
        </div>
      </div>

      <div>
        <Outlet />
      </div>
    </>
  );
};

export default App;
