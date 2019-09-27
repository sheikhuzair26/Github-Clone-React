// Component is simply a Function
import React from "react";
import "./NavBar.css";

function NavBar() {
  return (
    <header>
      <span>
        <a href="www.github.com">
          {" "}
          <i class="fab fa-github"></i>
        </a>
      </span>

      <div className="leftHead">
        <ul>
          <a href="">
            <li>Why GitHub?</li>
          </a>
          <a href="">
            <li>Enterprise</li>
          </a>
          <a href="">
            <li>Explore</li>
          </a>
          <a href="">
            <li>Marketplace</li>
          </a>
          <a href="">
            <li>Pricing</li>
          </a>
        </ul>
      </div>
      <div className="rightHead">
        <input
          type="text"
          className="inputHeader"
          placeholder="Search GitHub"
        />
        <li>Sign in</li>
        <a href="#registration">
          {" "}
          <button className="signUp-btn">Sign up</button>
        </a>
        <i class="fas fa-bars"></i>
      </div>
    </header>
  );
}

export default NavBar;
