import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { DateRangeSelector } from "./components/DateRangeSelector";

import "./styles.css";

function App() {
     return (
          <div className="App">
               <h1>Hello CodeSandbox</h1>
               <DateRangeSelector />
          </div>
     );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
