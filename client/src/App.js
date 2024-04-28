import logo from "./Assets/logo.svg";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./pages/Header";
import Preheader from "./pages/preheader";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Footer from "./pages/footer";
import Prediction from "./pages/prediction";
import User from "./pages/User";
import Result from "./pages/Result";
import Userprofile from "./pages/container/Userprofile";
function App() {
  return (
    <div className="App" style={{ backgroundColor: "smokewhite" }}>
      <Preheader />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prediction/:id" element={<Prediction />} />
        <Route path="/Admin" element={<User />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/result/:id" element={<Result />} />
        <Route path="/userprofile" element={<Userprofile />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
