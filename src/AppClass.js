import React from "react";
import './App.css';

class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      array: [],
      showRedText: false
    };

  }

  // Rarely Used
  static getDerivedStateFromProps(props, state) {

  }

  shouldComponentUpdate(nextProps, nextState) {

    return true;
  }

  componentDidUpdate(prevProps, prevState, snaphot) {

  }

  componentDidMount() {

    // Assume I am hitting an API
    let newArray = [1, 2, 3, 4, 5];
    setTimeout(() => {
      this.setState({
        array: newArray
      });
    }, 5000);
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
          <p>{this.state.date}</p>
          <button onClick={this.changeDate} >currentDate</button>
          <p>{this.state.array.toString()}</p>

          <button onClick={this.toogleRedText}>Toogle Me to Open Red Text</button>
          {this.state.showRedText === true && <p style={{ color: "red" }}>I am Red Text</p>}
          {this.state.showRedText === true 
            ? <p style={{ color: "red" }}>I am Red Text</p>
            : <p style={{ color: "green" }}>I am Green Text</p>}
        </header>
      </div>
    );
  }
}

export default MyApp;