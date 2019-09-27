import React from "react";
import "./SectionCards.css";
import ImageCards from "./ImageCards";

const SectionCards = () => {
  return (
    <section id="cards">
      <p className="cards-para">
        See how the world's leading companies use GitHub Enterprise.
      </p>
      <div className="container-card">
        <ImageCards
          heading="MGM Resort International"
          paraText="Hospatility"
          anchorURL="https://google.com"
          imgURL="https://customer-stories-feed.github.com/customer_stories/mgm-resorts/hero.jpg "
        />

        <ImageCards
          heading="NationWide"
          paraText="Insurance"
          anchorURL="https://google.com"
          imgURL="https://customer-stories-feed.github.com/customer_stories/nationwide/nw_hero.jpg "
        />

        <ImageCards
          heading="SAP"
          paraText="Bussiness Software"
          anchorURL="https://google.com"
          imgURL="https://customer-stories-feed.github.com/customer_stories/sap/sap6.jpg"
        />

        <ImageCards
          heading="Spotify"
          paraText="Technology / Streaming "
          anchorURL="https://google.com"
          imgURL="https://customer-stories-feed.github.com/customer_stories/spotify/spotifyhero.jpg"
        />
      </div>
    </section>
  );
};

export default SectionCards;
