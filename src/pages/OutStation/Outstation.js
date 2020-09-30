import React from "react";
import OutstationForm from "../../components/Form/OutstationForm";
import Selector from "../../components/Selector/Selector";
import Home from "../../components/Home";

function Outstation() {
  return (
    <>
      <Selector primary />
      <OutstationForm />
      <Home />
    </>
  );
}

export default Outstation;
