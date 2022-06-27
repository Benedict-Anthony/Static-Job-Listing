import React from "react";

import { FaTimes } from "react-icons/fa";

function Filterbar({ item, cancelFilter }) {
  return (
    <span className="filtered">
      {item} <FaTimes className="dlt" onClick={() => cancelFilter(item)} />
    </span>
  );
}

export default Filterbar;
