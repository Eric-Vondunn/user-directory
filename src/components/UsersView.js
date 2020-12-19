import React from "react";
import EmployeeProfile from "./EmployeeProfile";

//UsersView
function UsersView(props) {
  return (
    <div>
      {console.log(props.employees)}
      <h1>Users View</h1>
      <EmployeeProfile employees={props.employees} />
    </div>
  );
}

export default UsersView;
