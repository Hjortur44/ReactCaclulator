/// PUBLIC ///

function back(): void {
    _eqs.pop();
}

function calculate(): string {
    if(!Number(_eqs[_eqs.length - 1])) return "Error";
    return "D";
}

function clear(): void {
    _eqs = [];
}

function equation(): Array<string> {
    return _eqs;
}

function input(val: string): void{
    _eqs.push(val);
}

function print(): string {
    return _eqs.join("");
}


/// PRIVATE ///

let _eqs: Array<string> = [];

export default {
    back,
    calculate,
    clear,
    equation,
    input,
    print
}