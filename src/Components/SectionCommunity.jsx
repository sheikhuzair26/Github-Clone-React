import React from "react";
import "./SectionCommunity.css";
import ImageCards from "./ImageCards";

const SectionCommunity = () => {
  return (
    <section id="developer">
      <div className="developers-intro">
        <h6>Community</h6>
        <h1>
          Welcome Home, <br></br>developers
        </h1>
        <p className="dev-para">
          GitHub is home to the world’s largest community of developers and
          their projects...
        </p>
      </div>
      {/* cards */}
      <div className="dev-container">
        <ImageCards
          heading="Russelle Keith"
          paraText="I grew up learning to code using the Borland suite of tools (Turbo
            C, Turbo Pascal and so on). Since it was the late 80s, they were
            all console based but they had a really good editor and debugger
            built in."
          anchorURL="https://google.com"
          imgURL="https://customer-stories-feed.github.com/customer_stories/freakboy3742/hero.jpg "
        />

        <ImageCards
          heading="Kris Nova"
          paraText=" I first started poking around Kubernetes in August 2016. Writing
          backend Go was something I had done in the past few years, and I
          always love new technology and exciting communities. It was a
          natural fit."
          anchorURL="https://google.com"
          imgURL="https://customer-stories-feed.github.com/customer_stories/kris-nova/hero.jpg"
        />

        <ImageCards
          heading="Evan"
          paraText="I grew up learning to code using the Borland suite of tools (Turbo
            C, Turbo Pascal and so on). Since it was the late 80s, they were
            all console based but they had a really good editor and debugger
            built in."
          anchorURL="https://google.com"
          imgURL="https://customer-stories-feed.github.com/customer_stories/yyx990803/hero.jpg"
        />
        <ImageCards
          heading="Jass Farazelle"
          paraText="I was already familiar with Docker, but I opened my first pull
          request on July 9th, 2014. It was to fix some duplicate IP tables
          rules. After joining the company and contributing more, I became a
          maintainer."
          anchorURL="https://google.com"
          imgURL="https://customer-stories-feed.github.com/customer_stories/jessfraz/hero.jpg"
        />
      </div>
    </section>
  );
};

export default SectionCommunity;
