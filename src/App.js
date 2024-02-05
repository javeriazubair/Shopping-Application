// src/App.js
import React from "react";
import Navigation from "./components/routes/routes";
import {
  BrowserRouter as Router,

} from "react-router-dom";

const App = () => {
  return(
    <div>
    <Router>
      <div>
   <Navigation />
   </div>
   </Router>
   </div>
  )
};

export default App;
