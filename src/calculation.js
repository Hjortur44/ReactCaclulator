import { PriorityQueue } from './priorityQueue.js';

export function calc(equ, op) {    
    let n = numerication(equ, op);   
    return calculation(n);
}

function numerication(equ, op) {
    let equation = [];
    let start = 0;

    for(let i = 0; i < op.length; i++) {      
        let end = op[i]; 
        equation.push(Number(equ.substring(start, end)));
        equation.push(equ.charAt(end));
        start = end + 1;
    }
    
    equation.push(Number(equ.substring(start, equ.length)));
    return equation;
}

function calculation(equ) {
    for(let i = 1; i < equ.length; i += 2) {
       switch(equ[i]) {
            case "*":
                equ[i + 1] = equ[i - 1] * equ[i + 1];
            break;
            
            case "/":
                equ[i + 1] = equ[i - 1] / equ[i + 1];
            break;
            
            case "+":
                equ[i + 1] = equ[i - 1] + equ[i + 1];
            break;
            
            case "-":
                equ[i + 1] = equ[i - 1] - equ[i + 1];
            break;
            
            default:
                console.log("No operation is possible !");
       }

       equ[i - 1] = "" 
       equ[i] = "";       
    }

    return equ;
}

