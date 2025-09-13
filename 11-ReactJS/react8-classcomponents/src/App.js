import { Component } from "react";
class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>Welcome to Class Component.... Rise!!!!</h1>
        <Products></Products>
      </div>
    ); // return
  } // render
} //class close
export default App;
class Products extends Component {
  render() {
    return (
      <div className="Products">
        <h1>Welcome to My Products Class Component</h1>
      </div>
    );
  }
}
