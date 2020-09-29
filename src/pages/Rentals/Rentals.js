import React from "react";
import Selector from "../../components/Selector/Selector";
import RentalForm from "../../components/Form/RentalForm";

function Rentals() {
  return (
    <>
      {" "}
      <Selector secondary />
      <RentalForm />
    </>
  );
}

export default Rentals;
