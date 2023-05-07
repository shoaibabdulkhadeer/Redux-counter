import './App.css';
import { increment } from './actions';
import { decrement } from './actions';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';


function App() {

  const counter = useSelector(state => state.counter)
  const loggedIn = useSelector(state => state.loggedReducer)

const dispath = useDispatch()
   
  return (
    <div className="App">
      <p>{counter}</p>
      <button onClick={() => dispath(increment())}>+</button>
      <button onClick={() => dispath(decrement())}>-</button>
 
 
       {loggedIn ?    <p>Confidential text </p>  : ""}
 

    </div>
  );
}

export default App;
