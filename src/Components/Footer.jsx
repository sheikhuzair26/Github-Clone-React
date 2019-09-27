import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <section id="end-footer">
        <div className="logo">GitHub</div>

        <div className="list">
          <ul className="line-one">
            <li className="li-footer"> Product</li>
            <li className="li-footer">Features</li>
            <li className="li-footer">Security</li>
            <li className="li-footer">Enterprise</li>
            <li className="li-footer">Customer Stories</li>
            <li className="li-footer">Pricing</li>
            <li className="li-footer">Resources</li>
          </ul>

          <ul className="line-two">
            <li className="li-footer">PlatForm</li>
            <li className="li-footer">Developer API</li>
            <li className="li-footer">Partners</li>
            <li className="li-footer">Atom</li>
            <li className="li-footer">Electron</li>
            <li className="li-footer">Github Desktop</li>
          </ul>

          <ul className="line-three">
            <li className="li-footer">Support</li>
            <li className="li-footer">Help</li>
            <li className="li-footer">Community</li>
            <li className="li-footer">Training</li>
            <li className="li-footer">Status</li>
            <li className="li-footer">Contact Github </li>
          </ul>

          <ul className="line-four">
            <li className="li-footer">Company</li>
            <li className="li-footer">About</li>
            <li className="li-footer">Blog</li>
            <li className="li-footer">Careers</li>
            <li className="li-footer">Press</li>
            <li className="li-footer">Shop </li>
          </ul>
        </div>
      </section>

      <footer>
        <div className="left-par">
          <li>© 2019 GitHub, Inc.</li>
          <li>Terms</li>
          <li>Privacy</li>
        </div>

        <div className="social">
          <a href="www.twitter.com" target="new">
            {" "}
            <i class="fab fa-twitter"></i>
          </a>
          <a href="www.facebook.com" target="new">
            {" "}
            <i class="fab fa-facebook-square"></i>
          </a>
          <a href="www.youtube.com" target="new">
            {" "}
            <i class="fab fa-youtube"></i>
          </a>
          <a href="www.linkedin.com" target="new">
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a href="www.github.com" target="new">
            {" "}
            <i class="fab fa-github"></i>
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
