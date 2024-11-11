import "./App.css";
import SignUp from "./auth/SignUp";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateComponent from "./components/PrivateComponent";
import Login from "./auth/Login";
import AddProduct from "./components/AddProduct";

function App() {
  return (
    <>
      <Router>
        {/* //uses link which is a part of react-router-dom, so kept inside router */}
        <Navbar />
        <Routes>
          <Route element={<PrivateComponent />}>
            <Route path="/" element={<h2>Product component</h2>} />
            <Route path="/add" element={<AddProduct />} />
            <Route path="/update" element={<h2>Update Product component</h2>} />
            <Route path="/profile" element={<h2>Profile component</h2>} />

            {/* <Route path="/logout" element={<h2>logout component</h2>} /> */}
          </Route>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>

      {/* //dont need any routing here */}
      <Footer />
    </>
  );
}

export default App;
