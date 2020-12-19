import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//psuedo code

// import React from "react";
// import "./App.css";
// function FormInput() {
//   return <div>form input</div>;
// }
// function UsersView(props) {
//   // props: users (filteredUsers)
//   // button to filter by name
//   // onClick -> this.sortUsers
//   return <div>users view</div>;
// }
// class App extends React.Component {
//   state = {
//     allUsers: [],
//     filteredUsers: [],
//     searchTerm: ""
//   }
//   // component did mount
//   // call API (utils)
//   // setState
//   // allUsers: [],
//   // filteredUsers: [],
//   // handleInputChange
//   // change (setState) searchTerm
//   // filter users based on searchTerm
//   // sort if relevant
//   // sortUsers
//   // using js sort (by string, or if you want to sort by number (DOB))
//   // optionally implement, up or down
//   render() {
//     return (
//       <div className="App">
//         <FormInput />
//         <UsersView />
//       </div>
//     );
//   }
// }
// export default App;
