import React from "react";
import { ThemeContext } from './../../contexts';

class ClassComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      array: [],
      showRedText: false
    };

  }

  changeDate = () => {
    let currentDate = new Date().toString();
    // setState({...state,date: currentDate});
    this.setState((state, props) => ({ date: currentDate }));
  }

  toogleRedText = () => {
    this.setState((state, props) => {
      return {
        showRedText: !state.showRedText
      }
    })
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <p>Current Theme: {JSON.stringify(this.context)}</p>
        </header>
      </div>
    );
  }
}

ClassComp.contextType = ThemeContext;

export { ClassComp };