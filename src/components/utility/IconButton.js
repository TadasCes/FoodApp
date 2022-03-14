import React from "react";

import { Link } from "react-router-dom";

const IconButton = (props) => {
  const Icon = props.icon;
  const onClickEvent = props.onClickEvent;
  const linkPath = props.linkPath;

  return onClickEvent === undefined ? (
    <Link to={linkPath}>
      <button className="btn-icon">
        <Icon />
      </button>
    </Link>
  ) : (
    <button className="btn-icon" onClick={() => onClickEvent()}>
      <Icon />
    </button>
  );
};

export default IconButton;
