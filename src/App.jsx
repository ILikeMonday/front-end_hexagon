import "./App.css";
import Grid from "./component/Grid.jsx";
import React from "react";
import { Routes, Route, useNavigate, Link } from "react-router-dom";
import Start from "./Start";

export default function App() {
  // const navigate = useNavigate();
  // const navigateToContacts = () => {
  //   navigate("/Start");
  // };

  // const navigateHome = () => {
  //   navigate("/");
  // };

  return (
    <div className="App">
      {/* <Grid /> */}
      <Link to="/">
        <button>Start</button>
      </Link>

      {/* <div>
        <button onClick={navigateHome}>Home</button>
        <hr />
        <button onClick={navigateToContacts}>Contacts</button>

        <Routes>
          <Route path="/contacts" element={<Start />} />
          <Route path="/" element={<App />} />
        </Routes>
      </div> */}
    </div>
  );
}