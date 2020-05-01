import React, { Component } from "react";

import DisplayCooperResult from "./components/DisplayCooperResult";
import InputFields from "./components/InputFields";

class App extends Component {
    state = {
        distance:"",
        gender: "",
        age: "",
        entrySaved: false
    };

    onChangeHandler = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

  render() {
    return (
      <>
        <InputFields onChangeHandler={this.onChangeHandler} />
        <DisplayCooperResult
          distance={this.state.distance}
          gender={this.state.gender}
          age={this.state.age}
          authenticated={this.state.authenticated}
          entrySaved={this.state.entrySaved}
          entryHandler={() => this.setState({ entrySaved: true })}
        />
      </>
    );
  }
}

export default App;