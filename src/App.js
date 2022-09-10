import React from "react";

// style
import "./App.css";
// components
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
// react router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mail from "./pages/Mail/Mail";
import EmailList from "./pages/EmailLIst/EmailList";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />

        <div className="app__body">
          <Sidebar />
          <Routes>
            <Route path="/" element={<EmailList />} />
            <Route path="/mail" element={<Mail />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
