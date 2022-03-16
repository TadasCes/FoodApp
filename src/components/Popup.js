import React from "react";
import { Link } from "react-router-dom";

function Popup(props) {
  const confirmDelete = () => {
    props.setTrigger(false);
    props.deleteItem();
  };

  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <h3>{props.text}</h3>
        {!props.isYesNoBtn ? (
          <div>
            <Link to="/">
              <button
                className="btn btn-secondary"
                onClick={() => props.setTrigger(false)}
              >
                Close
              </button>
            </Link>
          </div>
        ) : (
          // <Link to="/">
          <div>
            <button
              className="btn btn-secondary"
              onClick={() => props.setTrigger(false)}
            >
              No
            </button>
            <button
              className="btn btn-primary bg-danger"
              onClick={() => confirmDelete()}
            >
              Yes
            </button>
          </div>
          // </Link>
        )}
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}

export default Popup;
