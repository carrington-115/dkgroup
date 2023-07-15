import React from "react";
import Aboutcover from "./about/Aboutcover";
import Foundercontent from "./about/Foundercontent";
import Aboutservices from "./about/Aboutservices";
import Contactform from "./contact/Contactform";
import Footer from "./contact/Footer";

function Aboutus() {
  return (
    <div>
      <Aboutcover />
      <Foundercontent />
      <Aboutservices />
      <Contactform />
      <Footer />
    </div>
  );
}

export default Aboutus;
