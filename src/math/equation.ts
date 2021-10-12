let eqs: Array<number | string> = [];
let num: string = "";

function flushNumber(){
    if(num.length > 0) {
        eqs.push(Number(num));
        num = "";
    }
}

export function number(n: string): void{
    num += n;
}

export function operand(op: string): void {
    flushNumber();

    if(op.length != 0) eqs.push(op);
}

export function back(): void {
    eqs.pop();
}

export function calculate(): string {
    flushNumber();

    if(!Number(eqs[eqs.length - 1])) return "Error";
    return "D";
}

export function print(): string {
    flushNumber(); 
    return eqs.join("");
}