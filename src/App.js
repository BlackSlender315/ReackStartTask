import logo from './logo.svg';
import { useState } from 'react';
import './App.css';


function Welcome(props){
  return <h1>{props.name}</h1>
}
function Greeting(prop){
return <h1>Greetings Comander,{prop.name}</h1>
}
function TodoItem(props){
  return <p>Задача:{props.task}</p>
}
function App() {
  const [counter, setCounter] = useState(0)
  const [array, setArray] = useState(["123", "132", "321", "231"])
  return (
    <div >
      <Greeting name="Nikita"/>
      <button type="button" onClick={()=>{setCounter(counter+1)}}>Я кнопка</button>
      <TodoItem task={array[0]}/>
      <TodoItem task={array[1]}/>

      <p>Counter: {counter}</p>
    </div>
  );
}
export default App;