import React, { useEffect, useState } from 'react';
import './App.css';
import { PriorityQueue } from './priorityQueue.js';

const App = () => {
    const [result, setResult] = useState("");
    const [num, setNum] = useState("");
    const [nums, setNums] = useState([]);
    const [ops, setOps] = useState([]);
    
    let pq = new PriorityQueue();

    const handleNumClick = (e) => {
        setResult(result.concat(e.target.name));
        setNum(num.concat(e.target.name));
    }

    const handleOpClick = (e) => {
        setResult(result.concat(e.target.name));
        setOps(ops => [...ops, e.target.name]);
        setNums(nums => [...nums, num]);
        setNum("");
    }

    const handleClear = () => {
        setResult("");
        setNum("");
        setNums([]);
        setOps([]);
    }

    const handleBack = () => {
        setResult(result.slice(0, -1));
    }

    const handleCalculate = (e) => {
        setNums(nums => [...nums, num]);
        setNum("");

        calculate();
    }

    const calculate = () => {

        // TODO: handle when a number is missing
        // before or after an operand, also hanle
        // when an operand is clicked right after
        // some other operand had been clicked.

        //setResult(result.replace("*", ""));
        let a = result.search(/\*/);
        let b = result.search(/\//);
        let c = result.search(/\+/);
        let d = result.search(/-/);
     

        // Clear the arrays after calculation has been done.
        setNums([]);
        setOps([]);
    }

    return (
        <div classvalue="container">
            <form>
                <input type="text" value={result} readOnly />
            </form>

            <div classvalue="keypad">
                <button onClick={handleClear}>Clear</button>
                <button onClick={handleBack}>C</button>
                <button name="/" onClick={handleOpClick}>&divide;</button>
                <button name="7" onClick={handleNumClick}>7</button>
                <button name="8" onClick={handleNumClick}>8</button>
                <button name="9" onClick={handleNumClick}>9</button>
                <button name="*" onClick={handleOpClick}>&times;</button>
                <button name="4" onClick={handleNumClick}>4</button>
                <button name="5" onClick={handleNumClick}>5</button>
                <button name="6" onClick={handleNumClick}>6</button>
                <button name="-" onClick={handleOpClick}>&ndash;</button>
                <button name="1" onClick={handleNumClick}>1</button>
                <button name="2" onClick={handleNumClick}>2</button>
                <button name="3" onClick={handleNumClick}>3</button>
                <button name="+" onClick={handleOpClick}>+</button>
                <button name="0" onClick={handleNumClick}>0</button>
                <button name="." onClick={handleNumClick}>.</button>
                <button name="=" onClick={handleCalculate}>=</button>                
            </div>
        </div>
       
    );
}

export default App;