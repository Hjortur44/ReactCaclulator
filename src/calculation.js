import { PriorityQueue } from './priorityQueue.js';

let equation = [];

export function calc(equ, op) {
    let operands = ["*", "/", "+", "-"];
    let start = 0;

    for(let i = 0; i < op.length; i++) {      
        let end = op[i]; 
        equation.push(Number(equ.substring(start, end)));
        start = end + 1;
    }
    
    equation.push(Number(equ.substring(start, equ.length)));

    console.log(equation);
}