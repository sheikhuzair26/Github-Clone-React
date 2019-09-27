import React from "react";
import "./SectionIntegrateGit.css";

const SectionIntegrateGit = () => {
  return (
    <section id="build">
      <div className="container-integerate">
        <h4>Integrations</h4>
        <h1>Build on GitHub</h1>
        <p className="int-para">
          Customize your process with GitHub apps and an intuitive API.
          Integrate the tools you already use or discover new favorites to
          create a happier, more efficient way of working.
        </p>
        <button className="btn-int">Learn About integrations</button>

        <div className="circles">
          <img
            src="https://github.githubassets.com/images/modules/site/integrators/slackhq.png"
            alt="slack"
          />
          <img
            src="https://github.githubassets.com/images/modules/site/integrators/zenhubio.png"
            alt="zenhubio"
          />
          <img
            src="https://github.githubassets.com/images/modules/site/integrators/travis-ci.png"
            alt="travis Ci"
          />
          <img
            src="https://github.githubassets.com/images/modules/site/integrators/atom.png"
            alt="atom"
          />
          <img
            src="https://github.githubassets.com/images/modules/site/integrators/circleci.png"
            alt="circle CI"
          />
          <img
            src="https://github.githubassets.com/images/modules/site/integrators/google.png"
            alt="google"
          />
          <img
            className="hidden-circle"
            src="https://github.githubassets.com/images/modules/site/integrators/codeclimate.png"
            alt="codeclimate"
          />
        </div>

        <div className="int-text">
          <p className="text">
            Sometimes, there’s more than one tool for the job. <br></br>
            Why not try something new?
          </p>
          <a href="#">Browse GitHub Marketplace</a>
        </div>
      </div>
    </section>
  );
};

export default SectionIntegrateGit;
