// import React from "react";
// import Main from "./components/Main";
// import Wrapper from "./components/Wrapper";
// import Header from "./components/Header";

// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <Wrapper>
//         <Header />
//         <Main />
//       </Wrapper>
//     </div>
//   );
// }

import React from "react";
import "./App.css";

function FormInput() {
  <div>form input</div>;
}

function UsersView(props) {
  // props: users (filteredUsers)
  // button to filter by name
  // onClick -> this.sortUsers
  <div>users view</div>;
}

class App extends React.Component {
  state = {
    allUsers: [],
    filteredUsers: [],
    searchTerm: "",
    sortOption: "",
  };

  // component did mount
  //call API (utils)
  // setState
  //allUsers: [],
  //filteredUsers: [],

  // handleInputChange
  // change (setState) searchTerm
  // filter users based on searchTerm
  // sort if relevant

  // sortUsers
  //using js sort by string or sort by number birthday etc
  //bonus toggle to ascending or descending
  render() {
    return (
      <div className="App">
        <FormInput />
        <UsersView />
      </div>
    );
  }
}

export default App;

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
