import React from "react";
import "./SignUpTeams.css";


const SignUpTeams = () => {
  return (
    <section id="git-team">
      <div className="container-team">
        <h4>GitHub for teams</h4>

        <h1>A better way to work together</h1>

        <p className="team-para">
          GitHub brings teams together to work through problems, move ideas
          forward, and learn from each other along the way.
        </p>

        <button className="btn-team">
          <a href="#"> Sign up your team</a>
        </button>
      </div>
    </section>
  );
};

export default SignUpTeams;
