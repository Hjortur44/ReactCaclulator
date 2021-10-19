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

function number(n: string): void{
    _num = _num.concat(n);
}

function operand(op: string): void {
    _op = op;
}

function print(): string {
    _flush();
    return _eqs.join("");
}


/// PRIVATE ///

let _eqs: Array<number | string> = [];
let _num: string = "";
let _op: string = "";

function _flush(){
    if(_num.length > 0) {
        _eqs.push(Number(_num));
        _num = "";
    }

    if(_op.length !== 0) {
        _eqs.push(_op);
        _op = "";
    }
}

export default {
    back,
    calculate,
    clear,
    number,
    operand,
    print
}