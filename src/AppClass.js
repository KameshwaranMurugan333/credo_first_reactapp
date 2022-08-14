import React from "react";
import { LoginScreen } from './screens';

class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      array: [],
      showRedText: false,
      isError: false,
      error:"",
      errorInfo: ""
    };

  }

  componentDidUpdate(prevProps, prevState, snaphot) {

  }

  componentDidCatch(error, errorInfo){
    console.log("Error:",error);
    console.log('errorInfo:', errorInfo);
    this.setState({
      isError:true,
      errorInfo,
      error
    })
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

    if(this.state.isError){
      return <div>
        <p>500 Opps!</p>
        <p>Something went wrong, Try again</p>
        <p>Error </p>
        <pre>{JSON.stringify(this.state.error,null,2)}</pre>
        <p>Error Info</p>
        <pre>{JSON.stringify(this.state.errorInfo,null,2)}</pre>
      </div>
    }

    return (
      <div className="App">
        <header className="App-header">
          <LoginScreen />
        </header>
      </div>
    );
  }
}

export default MyApp;