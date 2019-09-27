import React from "react";

const ImageCards = props => {
  return (
    <>
      <div className="card">
        <img src={props.imgURL} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.heading}</h5>
          <p className="card-text">{props.paraText}</p>
          <a href={props.anchorURL} className="btn btn-primary" target="new">
            Read more
          </a>
        </div>
      </div>
    </>
  );
};

export default ImageCards;
