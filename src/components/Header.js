import React from "react";

function Header({ handleToggleDarkMode }) {
  return (
    <div className="header">
      <h3>Notes</h3>
      <button className="save" onClick={()=> handleToggleDarkMode((prevDarkMode) => !prevDarkMode)}>
        Toggle Mode
      </button>
    </div>
  );
}

export default Header;
