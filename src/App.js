import React from "react";
//import global style
import GlobalStyle from "./Components/GlobalStyle";
//import pages
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <h1>player</h1>
      <AboutUs />
    </div>
  );
}

export default App;
