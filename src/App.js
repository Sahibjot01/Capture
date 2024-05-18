import React from "react";
import Nav from "./Components/Nav";
//import global style
import GlobalStyle from "./Components/GlobalStyle";
//import pages
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";

//router
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path="/" element={<AboutUs />} />
        <Route path="/work" element={<ContactUs />} />
        <Route path="/contact" element={<OurWork />} />
      </Routes>
    </div>
  );
}

export default App;
