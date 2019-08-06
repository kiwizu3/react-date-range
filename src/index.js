import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import DateRangeSelector from "./components/DateRangeSelector";

import "./styles.css";

function App() {
     return (
          <div className="App mt-3">
               <h3>react-date-range | ShoutOUT</h3>
               <div className="text-center p-4">
                    <DateRangeSelector />
               </div>
          </div>
     );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
