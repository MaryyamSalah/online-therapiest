import React from "react";
import { Link } from "react-router-dom";
  
export default function Header() {
 
  return (
    <div>
      <h1>HEALING</h1>
      <nav className="bg-green  px-2 sm:px-4 py-2.5 rounded">
      <div class="container flex flex-wrap items-center justify-between mx-auto">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/login">LOGIN</Link>
        </div>
      </nav>
    </div>
  );
}

