import React from 'react';
import "./SectionStarted.css";


function SectionStarted() {
  return (
    <section id="get-Started">
      <div className="contaion-started">
        <div className="get-start">
          <h2>Get started with GitHub Enterprise</h2>

          <p className="started-para">
            Take collaboration to the next level with security and
            administrative features built for businesses.
          </p>
        </div>

        <div className="cloud-server">
          <img
            className="servers-pichaw"
            src={require("../images/cloud.PNG")}
            alt="Cloud"
          />
          <h6>Enterprise Cloud</h6>
          <p className="cloud-para">Leave the hosting to us.</p>

          <button className="btn-cloud">Try Cloud for Free</button>
        </div>

        <div className="cloud-server">
          <img
            className="servers-pichaw"
            src={require("../images/server.PNG")}
            alt="Server"
          />
          <h6>Enterprise Server</h6>
          <p className="cloud-para">Deploy to your environment.</p>

          <button className="btn-cloud">Try Server for Free</button>
        </div>

        <div className="cloud-server">
          <img
            className="servers-pichaw"
            src={require("../images/talk.PNG")}
            alt="Talk"
          />

          <h6>Talk to us</h6>
          <p className="cloud-para">Want to use both?</p>

          <button className="btn-talk">Contact Sales</button>
        </div>
      </div>
    </section>
  );
}

export default SectionStarted;
