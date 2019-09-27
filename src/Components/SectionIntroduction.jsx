import React from "react";
import "./SectionIntroduction.css"

function SectionIntroduction() {
  return (
    <section id="introduction">
      <div className="container-intro">
        <h2 className="intro-content">Introducing GitHub Actions with CI/CD</h2>
        <p className="intro-para">
          Automate any workflow with GitHub Actions.<br></br> See the latest
          updates announced at our HQ reveal.
        </p>
        <button className="btn-into">
          <a href="#"> Checkit out</a>
        </button>
      </div>
    </section>
  );
}

export default SectionIntroduction;
