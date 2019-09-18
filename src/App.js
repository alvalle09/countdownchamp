import React, { Component } from "react";
import Clock from "./Clock";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, FormControl } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: "December 26, 2019",
      newDeadline: ""
    };
  }

  changeDeadline() {
    console.log("state", this.state);
    this.setState({ deadline: this.state.newDeadline });
  }

  render() {
    return (
      <div className="App">
        <div className="App-title">Countdown to {this.state.deadline}</div>
        <div>
        <Clock deadline={this.state.deadline} />
        </div>
        
        <div>
          <Form inline>
          
          <FormControl
            className="Deadline-input"
            placeholder="new date"
            onChange={event =>
              this.setState({ newDeadline: event.target.value })
            }
            
          />
          <Button onClick={() => this.changeDeadline()}>Submit</Button>
        </Form>
        </div>    
      </div>
    );
  }
}

export default App;
