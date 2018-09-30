import React from "react";
import Main from "./Main.js";
import Header from "./Header.js";

function App() {
  return (
    <div>
      <Header />
      <Main />
      <footer className="footer">
        <h4>
          Get in touch -{" "}
          <a className="nimbla" href="https://www.nimbla.com/" target="_blank">
            Nimbla
          </a>
        </h4>
      </footer>
    </div>
  );
}

export default App;
