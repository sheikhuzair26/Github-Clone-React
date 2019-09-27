import React from "react";
import "./SectionConfiguration.css";
import GeneralBlock from "./GeneralBlock";

const SectionConfiguration = () => {
  return (
    <section id="config">
      <div className="cartoon">
        <img src={require("../images/cartoon.PNG")} alt="Robot" />
      </div>

      <div className="config-details">
        <GeneralBlock
          heading="Write Better Code"
          paraText="Collaboration makes perfect.The Collaboration and codes reviews that
           happen in pull request help your team share the weight of your work
           and improve the software you bulid."
          anchorURL="https://google.com"
        />

        <GeneralBlock
          heading="Find the right Tools"
          paraText="Collaboration makes perfect.The Collaboration and codes reviews that
          happen in pull request help your team share the weight of your work
          and improve the software you bulid."
          anchorURL="https://google.com"
        />
      </div>
    </section>
  );
};

export default SectionConfiguration;
