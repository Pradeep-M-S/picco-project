import React from "react";
// import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "./Data";
// import { InfoSection, Pricing } from "../../components";
import Form from "../../components/Form/Form";
import Selector from "../../components/Selector";

function Home() {
  return (
    <>
      {" "}
      <Selector primary />
      <Form />
    </>
  );
}

export default Home;
