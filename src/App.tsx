import React from 'react';
import './App.css';
import Labs from "./labs";
import HelloWorld from "./labs/a3/hello-world";
import Tuiter from "./tuiter";
import {BrowserRouter as Router} from "react-router-dom";
import {Routes, Route, Navigate} from "react-router";

function App() {
   return (
    <Router>
      <div className="container">
      <Routes>
          <Route path="/labs/*" element={<Labs/>}/>
          <Route path="/" element={<Navigate to="/labs"/>}/>
          <Route path="/hello" element={<HelloWorld/>}/>
          <Route path="/tuiter/*" element={<Tuiter/>}/>
        </Routes>
      </div>
    </Router>
   );
}
export default App;

