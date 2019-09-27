import React from "react";
import "./SectionRegistration.css";
const SectionRegistration = () => {
  return (
    <section id="registration">
      <div className="container-Login">
        <h3>
          Get started for free — join the millions of developers already using
          GitHub to share their code, work together, and build amazing things.
        </h3>
        <div className="login-portal">
          <span className="control">
            <label id="label-portal" htmlFor="inputUser">
              Username
            </label>
            <input
              id="inputUser"
              type="text"
              placeholder="Pick a Username"
              required
              autofocus
            />
          </span>
          <span className="control">
            <label id="label-portal" htmlFor="inputEmail">
              Email
            </label>

            <input
              id="inputEmail"
              type="text"
              placeholder="Your Email Address"
              required
              autofocus
            />
          </span>
          <span className="control">
            <label id="label-portal" htmlFor="inputPas">
              Password
            </label>

            <input
              id="inputPas"
              type="text"
              placeholder="Create Your Password"
              required
              autofocus
            />
          </span>
          <br />
          <span>
            <button class="btn-controls">
              <span> Sign up for GitHub</span>
            </button>{" "}
          </span>
        </div>

        <p className="statement-para">
          By clicking “Sign up for GitHub”, you agree to our{" "}
          <a href="#"> terms of service</a> and{" "}
          <a href="#">privacy statement</a> . We’ll occasionally send you
          account related emails.
        </p>
      </div>
    </section>
  );
};

export default SectionRegistration;
