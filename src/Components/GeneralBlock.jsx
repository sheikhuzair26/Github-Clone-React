import React from "react";

const GeneralBlock = props => {
  return (
    <>
      <summary>
        <h4>{props.heading}</h4>
        <p id="security-para">{props.paraText} {" "}
        <a
          href={props.anchorURL}
          className=" btn btn-primary"
          id="security-anchor"
          target="new"
        >
          Learn about code review
        </a>
        </p>
      </summary>
    </>
  );
};

export default GeneralBlock;
