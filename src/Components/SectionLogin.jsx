import React from "react";
import "./SectionLogin.css";

function SectionLogin() {
  return (
    <section className="first-sec">
      <div className="info-block">
        <h1 className="main-heading">Built for developers</h1>
        <p className="main-content">
          GitHub is a development platform inspired by the way you work. From{" "}
          <a href="#">open source </a> to <a href="#">business</a>, you can host
          and review code, manage projects, and build software alongside 40
          million developers.
        </p>
        <button className="btn-registeration">Sing up for GitHub</button>
      </div>

      <div className="formBlock">
        <form>
          <div>
            <label for="highlight">Name</label>
            <input id="highlight" type="text" required autofocus />
          </div>
          <div>
            <label>Email</label>
            <input type="text" required autofocus />
          </div>
          <div>
            <label>Password</label>
            <input type="text" required autofocus />
          </div>

          <p>
            Make sure it's at least 15 characters OR at least 8 characters
            including a number and a lowercase letter.{" "}
            <a href="#"> Learn more</a>.
          </p>

          <div>
            <button class="buttonForm">
              <span> Sign up for GitHub</span>
            </button>{" "}
          </div>
          <p className="terms">
            By clicking “Sign up for GitHub”, you agree to our{" "}
            <a href="#"> Terms of Service</a> and{" "}
            <a href="#"> Privacy Statement</a>. We’ll occasionally send you
            account related emails.
          </p>
        </form>
      </div>
    </section>
  );
}

export default SectionLogin;
