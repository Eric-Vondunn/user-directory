import React from "react";
import "./App.css";
import Header from "./components/Header";
import UsersView from "./components/UsersView";
import API from "./utils/API";
import FormInput from "./components/FormInput";
import "bootstrap/dist/css/bootstrap.min.css";

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
    filteredUsers: [""],
    firstName: "",
    lastName: "",
    gender: "",
    location: "",
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
        <Header />
        <FormInput
          handleInputChange={this.handleInputChange}
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          filteredUsers={this.state.filteredUsers}
        />
        <UsersView employees={this.state.allUsers} />
      </div>
    );
  }
}

export default App;
