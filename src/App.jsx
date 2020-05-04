import React, { Component } from "react";
import { Button, Container } from 'semantic-ui-react'
import { Line } from 'react-chartjs-2'

import DisplayCooperResult from "./components/DisplayCooperResult";
import InputFields from "./components/InputFields";
import LoginForm from "./components/LoginForm";
import { authenticate } from "./modules/auth"
import DisplayPerformanceData from "./components/DisplayPerformanceData"
import Welcome from './components/Welcome'

class App extends Component {
  state = {
    distance:"",
    gender: "",
    age: "",
    entrySaved: false,
    renderLoginForm: false,
    renderIndex: false,
    authenticated: false,
    message: "",
    updateIndex: false 
  };

    onChangeHandler = e => {
        this.setState({ [e.target.name]: e.target.value, entrySaved: false });
    };

    genderOnChangeHandler = (e, data) => {
      this.setState({
        [data.name]: data.value
      })
    }

    onLogin = async e => {
      e.preventDefault();
      const response = await authenticate(
        e.target.email.value,
        e.target.password.value
      );

      if (response.authenticated) {
        this.setState({ authenticated: true, message: response.message });
      } else {
        this.setState({ message: response.message, renderLoginForm: false });
      }
    };

    render() {
      const { renderLoginForm, authenticated, message } = this.state;
      let renderLogin;
      let performanceDataIndex;
      switch(true) {
        case renderLoginForm && !authenticated:
          renderLogin = <LoginForm submitFormHandler={this.onLogin} />;
          break;
        case !renderLoginForm && !authenticated:
          renderLogin = (
            <>
              <Button
                basic
                id="login"
                onClick={() => this.setState({ renderLoginForm: true })}
              >
                Login
              </Button>
              <p id="message">{message}</p>
            </>
          );
          break;
        case authenticated:
          renderLogin = (
            <p id="message">Hi {JSON.parse(sessionStorage.getItem("credentials")).uid}</p>
          );
          if (this.state.renderIndex) {
            performanceDataIndex = (
              <>
                <Button basic id="hide-index" onClick={() => this.setState({renderIndex: false })}>Hide past entries</Button>
                <DisplayPerformanceData
                  updateIndex={this.state.updateIndex}
                  indexUpdated={() => this.setState({ updateIndex: false })}
                />
              </>
            )
          } else {
            performanceDataIndex = (
              <Button basic id="show-index" onClick={() => this.setState({ renderIndex: true })}>Show past entries</Button>
            )
          }
          break;
      }
    return (
      <Container>
        <Welcome renderLogin={renderLogin} />
        <InputFields 
          onChangeHandler={this.onChangeHandler} 
          genderOnChangeHandler={this.genderOnChangeHandler}  
        />
        <DisplayCooperResult
          distance={this.state.distance}
          gender={this.state.gender}
          age={this.state.age}
          authenticated={this.state.authenticated}
          entrySaved={this.state.entrySaved}
          entryHandler={() => this.setState({ entrySaved: true, updateIndex: true })}
        />
        {performanceDataIndex}
        {/* <Line data={} /> */}
      </Container>
    );
  }
}

export default App;