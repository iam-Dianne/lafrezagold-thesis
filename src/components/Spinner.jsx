import React from "react";
import { ClipLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "100px auto",
};

const Spinner = () => {
  return <ClipLoader color="#facc15" cssOverride={override} size={150} />;
};

export default Spinner;
