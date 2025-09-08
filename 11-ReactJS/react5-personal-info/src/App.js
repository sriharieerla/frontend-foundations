//import logo from "./logo.svg";
import "./App.css";

function App() {
  const firstName = "Sri";
  const lastname = "Hari";
  const age = 20;
  const course = "B.Tech(CSE-AI & ML)";
  const year_sem = "Final year/1st Sem";
  const college = "Rise krishna sai prakasam groups of Institutions";
  const id = "218A1A4245";
  const styles = {
    margin: "18px",
    padding: "18px",
    boxSizing: "border-box",
    borderRadis: "6px",
    boxShadow: "0 4px 10px #ddd",
  };

  return (
    <div className="App">
      <div style={styles}>
        <h1>Welcome to ReactJs Programming!!!</h1>
        <h3>FirstName : {firstName}</h3>
        <h3>lastname : {lastname}</h3>
        <h3>Age : {age}</h3>
        <h3>course : {course}</h3>
        <h3>Year/sem : {year_sem}</h3>
        <h3>Id : {id}</h3>
        <h3>College : {college}</h3>
      </div>
    </div>
  );
}

export default App;
