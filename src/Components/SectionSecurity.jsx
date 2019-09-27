import React from "react";
import "./SectionSecurity.css";
import GeneralBlock from "./GeneralBlock";
const SectionSecurity = () => {
  return (
    <>
      <section id="bussiness-sec">
        <div className="container-bussiness">
          <h5>Security and administration</h5>
          <h1>Your business needs, met</h1>
          <p className="para-bussiness">
            From flexible hosting to granular access controls, we’ve got your
            security requirements covered.
          </p>
        </div>
        <button className="btn-bussiness">
          Learn How GitHub Enterprise works
        </button>
      </section>
      {/* Security Components */}

      <section id="security-sec">
        <div className="security-container">
          <div className="security-codes">
            <span>
              <GeneralBlock
                heading="Code Security"
                paraText="Prevent problems  before they happen. Protected branches, signed
                commits, and required status checks protect your work and help you maintain a high standard for your code."
              />
            </span>
            <span>
              <GeneralBlock
                heading="Access controlled"
                paraText="Encourage teams to work together while limiting access to those
                who need it with granular permissions and authentication through
                SAML/SSO and LDAP."
              />
            </span>
          </div>

          <div className="security-img">
            <img src={require("../images/chat.PNG")} alt="chat" />
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionSecurity;
