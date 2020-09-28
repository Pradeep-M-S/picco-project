import "./Selector.css";
import { ButtonNoOutline } from "./Selector.element";
import React from "react";

function Selector({ primary, secondary }) {
  return (
    <div className="selector-container">
      {" "}
      <ButtonNoOutline className={primary ? "bg" : ""} to="/">
        Outstations
      </ButtonNoOutline>
      <ButtonNoOutline className={secondary ? "bg" : ""} to="/rentals">
        Rentals
      </ButtonNoOutline>
    </div>
  );
}

export default Selector;
