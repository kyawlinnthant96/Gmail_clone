import React, { useEffect } from "react";

// style
import "./App.css";
// components
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
// react router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mail from "./pages/Mail/Mail";
import EmailList from "./pages/EmailLIst/EmailList";
import SendMail from "./components/SendMail/SendMail";
import { useDispatch, useSelector } from "react-redux";
import { selectSendMessageOpen } from "./features/mailSlice";
import { login, logout, selectUser } from "./features/userSlice";
import Login from "./pages/Login/Login";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase-config";

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageOpen);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            displayName: userAuth.displayName,
            email: userAuth.email,
            photoUrl: userAuth.photoURL,
          })
        );
      }
    });
  }, []);

  return (
    <Router>
      {!user ? (
        <Login />
      ) : (
        <div className="app">
          <Header />

          <div className="app__body">
            <Sidebar />
            <Routes>
              <Route path="/" element={<EmailList />} />
              <Route path="/mail" element={<Mail />} />
            </Routes>
          </div>

          {sendMessageIsOpen && <SendMail />}
        </div>
      )}
    </Router>
  );
}

export default App;
