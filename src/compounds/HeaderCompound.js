import React from "react";
import HeaderWrapper from "../componentes/Header/HeaderWrapper";
import NavBar from "../componentes/Header/NavBar";
import Logo from "../componentes/Header/Logo";
import SigninButton from "../componentes/Header/SigninButton";
import FeatureWrapper from "../componentes/Header/FeatureWrapper";
import FeatureTitle from "../componentes/Header/FeatureTitle";
import Warning from "../componentes/Header/Warning";

function HeaderCompound({ children }) {
  return (
    <HeaderWrapper className="header-wrapper-home">
      <NavBar className="navbar-home">
        <Logo />
        <SigninButton>Log In</SigninButton>
      </NavBar>
      <FeatureWrapper className="feature-wrapper-home">
        <FeatureTitle className="feature-title-home">
        Lance su propia plataforma IPTV/OTT!
        </FeatureTitle>
      </FeatureWrapper>
      {children}
    </HeaderWrapper>
  );
}

export default HeaderCompound;
