import React from 'react';
import { Button } from '../button/Button';
import equation from './equation';

type Props = {
    onClick: (v: string) => void;
  };

export function NumberPad({ onClick }: Props): JSX.Element {
    const numButtonsA: Array<string> = ["0", "1", "2", "3", "4"];
    const numButtonsB: Array<string> = ["5", "6", "7", "8", "9"];
    const opButtons: Array<string> = ["*", "/", "+", "-", "=", "."];
    const misButtons: Array<string> = ["Back", "Clear"];

    const handleNumberClick = (id: string) => () => {
        equation.number(id);
        onClick(equation.print());
    }

    const handleOperandClick = (id: string) => () => {
        equation.operand(id);
        onClick(equation.print());
    }

    const handleMiscellaneousClick = (id: string) => () => {
        if(id === "Back") equation.back();
        else if(id === "Clear") equation.clear();
        onClick(equation.print());
    }

    return (
        <div>
            {numButtonsA.map((b, i) => (
                <Button key={i} name={b} onClick={handleNumberClick(b)} />
            ))}

            {numButtonsB.map((b, i) => (
                <Button key={i} name={b} onClick={handleNumberClick(b)} />
            ))}

            {opButtons.map((b, i) => (
                <Button key={i} name={b} onClick={handleOperandClick(b)} />
            ))}

            {misButtons.map((b, i) => (
                <Button key={i} name={b} onClick={handleMiscellaneousClick(b)} />
            ))}
        </div>
    );
}