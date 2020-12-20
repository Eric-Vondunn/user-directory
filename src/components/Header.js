//header

import React from "react";

function Header() {
  return (
    <div className="jumbotron jumbotron-fluid tester p-3 mb-2 bg-info border border-dark">
      <div className="container light blue">
        <h1 className="display-4 lighter">Employee Directory</h1>
        <p className="lead lighter">Search by first and last name</p>
      </div>
    </div>
  );
}

export default Header;
