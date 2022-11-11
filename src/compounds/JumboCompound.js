import React from "react";
import JumboWrapper from "../componentes/Jumbotron/JumboWrapper";
import JumboItem from "../componentes/Jumbotron/JumboItem";
import JumboTextWrapper from "../componentes/Jumbotron/JumpoTextWrapper";
import JumboTitle from "../componentes/Jumbotron/JumboTitle";
import JumboSubTitle from "../componentes/Jumbotron/JumboSubTitle";
import JumboImageWrapper from "../componentes/Jumbotron/JumboImageWrapper";
import JumboImage from "../componentes/Jumbotron/JumboImage";
import JumboData from "../data/jumbo.json";
import Seperator from "../componentes/Seperator/Seperator";

function JumboCompound() {
  return (
    <JumboWrapper>
      {JumboData.map((item) => (
        <div>
          <JumboItem key={item.id}>
            <JumboTextWrapper>
              <JumboTitle>{item.title}</JumboTitle>
              <JumboSubTitle>{item.subTitle}</JumboSubTitle>
            </JumboTextWrapper>
            <JumboImageWrapper>
              <JumboImage src={item.image} alt={item.alt} />
            </JumboImageWrapper>
          </JumboItem>
          <Seperator />
        </div>
      ))}
    </JumboWrapper>
  );
}

export default JumboCompound;
