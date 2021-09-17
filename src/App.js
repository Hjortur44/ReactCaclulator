import React, { useEffect, useState } from 'react';
import './App.css';
import { calc } from './calculation.js';

const App = () => {
    const [result, setResult] = useState("");
    const [op, setOp] = useState([]);

    const handleClick = (e) => {
        setResult(result.concat(e.target.value));
        setOp(op => [...op, result.length]);
    }

    const handleNumClick = (e) => {
        setResult(result.concat(e.target.name));
    }

    const handleClear = () => {
        setResult("");
        setOp([]);
    }

    const handleBack = () => {
        setResult(result.slice(0, -1));
        setOp(op.slice(0, -1));
    }

    const handleCalculate = (e) => {        
        let res = calc(result, op);
        setResult(res);
        setOp([]);
    }

    return (
        <div classvalue="container">
            <textarea value={result} readOnly />

            <div classvalue="keypad">
                <button onClick={handleClear}>Clear</button>
                <button onClick={handleBack}>C</button>
                <button name="op_div" value="/" onClick={handleClick}>&divide;</button>
                <button name="7" onClick={handleNumClick}>7</button>
                <button name="8" onClick={handleNumClick}>8</button>
                <button name="9" onClick={handleNumClick}>9</button>
                <button name="op_mul" value="*" onClick={handleClick}>&times;</button>
                <button name="4" onClick={handleNumClick}>4</button>
                <button name="5" onClick={handleNumClick}>5</button>
                <button name="6" onClick={handleNumClick}>6</button>
                <button name="op_sub" value="-" onClick={handleClick}>&ndash;</button>
                <button name="1" onClick={handleNumClick}>1</button>
                <button name="2" onClick={handleNumClick}>2</button>
                <button name="3" onClick={handleNumClick}>3</button>
                <button name="op_add" value="+" onClick={handleClick}>+</button>
                <button name="0" onClick={handleNumClick}>0</button>
                <button name="." onClick={handleClick}>.</button>
                <button name="=" onClick={handleCalculate}>=</button>                
            </div>
        </div>
       
    );
}

export default App;