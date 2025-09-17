import MyDataComponent from "./MyDataComponent";
import Products from "./MyProductsData";
import { Component } from "react";
class App extends Component {
  render() {
    return (
      <div className="App">
        <h3>I am App.js I am Root Component</h3>
        <MyDataComponent></MyDataComponent>
        <Products></Products>
      </div>
    );
  }
}
export default App;
