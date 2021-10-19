import React from 'react';
import { Button } from '../button/Button';
import equation from './equation';

type Props = {
    value: (val: string) => void; 
};


export function NumberPad({ value }: Props): JSX.Element {
    const numButtonsA: Array<string> = ["0", "1", "2", "3", "4"];
    const numButtonsB: Array<string> = ["5", "6", "7", "8", "9"];
    const opButtons: Array<string> = ["*", "/", "+", "-", ".", "="];
    const misButtons: Array<string> = ["Back", "Clear"];

    const handleClick = (val: string) => () => {
        equation.input(val);
        value(equation.print());
    }

    const handleMisClick = (val: string) => () => {
        if(val === "Back") {
            equation.back();
        }else if(val === "Clear") {
            equation.clear();
        }

        value(equation.print());
    }

    return (
        <div>
            {numButtonsA.map((b, i) => (
                <Button key={i} name={b} onClick={handleClick(b)} />
            ))}

            {numButtonsB.map((b, i) => (
                <Button key={i} name={b} onClick={handleClick(b)} />
            ))}

            {opButtons.map((b, i) => (
                <Button key={i} name={b} onClick={handleClick(b)} />
            ))}

            {misButtons.map((b, i) => (
                <Button key={i} name={b} onClick={handleMisClick(b)} />
            ))}
        </div>
    );
}