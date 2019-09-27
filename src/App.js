import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Components/NavBar";
import SectionLogin from "./Components/SectionLogin";
import SectionStarted from "./Components/SectionStarted";
import SectionIntroduction from "./Components/SectionIntroduction";
import SectionOrganization from "./Components/SectionOrganization";
import SignUpTeams from "./Components/SignUpTeams";
import SectionConfiguration from "./Components/SectionConfiguration";
import SectionCards from "./Components/SectionCards";
import SectionSecurity from "./Components/SectionSecurity";
import SectionIntegrateGit from "./Components/SectionIntegrateGit";
import SectionCommunity from "./Components/SectionCommunity";
import SectionRegistration from "./Components/SectionRegistration";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <SectionLogin />
      <SectionStarted />
      <SectionIntroduction />
      <SectionOrganization />
      <SignUpTeams />
      <SectionConfiguration />
      <SectionCards />
      <SectionSecurity />
      <SectionIntegrateGit />
      <SectionCommunity />
      <SectionRegistration />
      <Footer />
    </div>
  );
}

export default App;
