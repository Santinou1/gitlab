import React from "react";
import { useState } from "react";
import HeaderCompound from "../../compounds/HeaderCompound";
import OptFormCompound from "../../compounds/OptFormCompound";
import JumboCompound from "../../compounds/JumboCompound";
import Seperator from "../../componentes/Seperator/Seperator";
import AccordionCompound from "../../compounds/AccordionCompound";
import FooterCompound from "../../compounds/FooterCompound";
import "./HomeStyles.css";

function Home() {
  return (
    
    <div className="body">
      <HeaderCompound>
        <OptFormCompound />
      </HeaderCompound>
      <Seperator />
      <JumboCompound />
      <AccordionCompound />
      <OptFormCompound />
      <Seperator />
      <FooterCompound />
      </div>
  );
}

export default Home;
