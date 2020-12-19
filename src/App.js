import React from "react";
import "./App.css";
import UsersView from "./components/UsersView";
import API from "./utils/API";
import FormInput from "./components/FormInput";
import Header from "./components/Header";

// function FormInput() {
//   <div>form input</div>;
// }

// function UsersView(props) {
//   // props: users (filteredUsers)
//   // button to filter by name
//   // onClick -> this.sortUsers
//   <div>users view</div>;
// }

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

  componentDidMount() {
    API.getUsers().then((employees) => {
      this.setState({ allUsers: employees.data.results });
    });
  }

  // handleInputChange
  // change (setState) searchTerm

  handleInputChange = (e) => {
    let value = e.target.value;
    const name = e.target.name;

    this.setState({ [name]: value });
    console.log(value);
  };

  // filter users based on searchTerm
  // sort if relevant

  // sortUsers
  //using js sort by string or sort by number birthday etc
  //bonus toggle to ascending or descending
  render() {
    return (
      <div className="App">
        <FormInput
          handleInputChange={this.handleInputChange}
          searchTerm={this.searchTerm}
        />
        <UsersView employees={this.state.allUsers} />
      </div>
    );
  }
}

export default App;
