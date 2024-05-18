import React from "react";
//import global style
import GlobalStyle from "./Components/GlobalStyle";
//import pages
import AboutUs from "./pages/AboutUs";
import Nav from "./Components/Nav";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AboutUs />
    </div>
  );
}

export default App;
