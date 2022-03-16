import React from "react";
import { Link } from "react-router-dom";
import { BTN_BACK } from "../../constants";

const BackButton = ({ to }) => {
  return (
    <>
      <Link to={`${to}`}>
        <button className="btn">{BTN_BACK}</button>
      </Link>
    </>
  );
};

export default BackButton;
