import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import "./App.css";
import SearchBox from "./components/searchBox/searchBox.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  //yeah function tab call hota j jab react pehli baar hmare component ko dom pe dalti h
  componentDidMount() {
    // server se data mangwane ke liye
    fetch("https://jsonplaceholder.typicode.com/users")
      //jo data server se aya h usko javascript understandable format mein convert karna h
      .then((response) => response.json())
      //data ko state ke andar store kar rahe h
      .then((users) => this.setState({ monsters: users }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeHolder="search monsters" callback={this.handleChange} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
