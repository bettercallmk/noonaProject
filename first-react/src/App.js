import {useState} from "react";
import './App.css';
import Box from './component/Box';

function App() {
    let counter = 0;
    const [counter2, setCounter2] = useState(0);
    const increase = () => {
        counter++;
        setCounter2(counter2 + 1);
    }
    return (
        <div>
            <div>{counter}</div>
            <div>state:{counter2}</div>
            <button onClick={increase}>클릭 !!!</button>
        </div>
    );
}



export default App;
