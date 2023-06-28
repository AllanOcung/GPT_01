
import './App.css';

const Person = (props) => {
  return (
    <>
    <h1>First Name: {props.FirstName}</h1>
    <h1>Last Name: {props.lastName}</h1>
    <h1>Age: {props.age}</h1>
    </>
  )
}


const App = () => {
  return (
    <div className="App">
      <Person FirstName="Allan" lastName="Ocung" age="24"/>
      <Person FirstName="Elsa" lastName="Nankya" age="22"/>
      <Person FirstName="Nathan" lastName="Odongo" age="23"/>
      <Person FirstName="Rebecca" lastName="Asato" age="22"/>
    </div>
  );
}

export default App;
