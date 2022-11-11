import React from "react";
import OptFormWrapper from "../componentes/OptForm/OptFormWrapper";
import OptFormText from "../componentes/OptForm/OptFormText";
import OptFormEmail from "../componentes/OptForm/OptFormEmail";
import OptFormButton from "../componentes/OptForm/OptFormButton";

function OptFormCompound() {
  return (
    <>
      <OptFormText>
      Obtenga una plataforma robusta a la altura de las mejores del mercado.

</OptFormText>
      <OptFormWrapper>
        <OptFormEmail placeholder="Ingrese su email para mas informacion" />
        <OptFormButton>Siguiente</OptFormButton>
      </OptFormWrapper>
    </>
  );
}

export default OptFormCompound;
