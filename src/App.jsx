import React from "react";
import { BrowserRouter as Router } from "react-router-dom";


function App(){
    return (
    <Router>
      <div className="App">
        <header><h1>Quiz Game</h1></header>
        <title>Choose your quiz category</title>
      </div>
    </Router>
  );
}

export default App;