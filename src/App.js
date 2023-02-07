import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Blogs from "./components/Blogs/Blogs";
import Contact from "./components/Contact/Contact";
import LogIn from "./components/LogIn/LogIn";
import BlogDetails from "./components/Blogs/BlogDetails";
  
function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <div className="container">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/contact" element={<Contact />}/>
            <Route path="/login" element={<LogIn />} />
            <Route path="/blogs/:id" element={<BlogDetails />} />
        </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}
  
export default App;