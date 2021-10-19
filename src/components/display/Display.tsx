import React from 'react';

type Props = {
    value: string;
}

export function Display({ value }: Props) : JSX.Element {
    return(
        <textarea value={ value } readOnly />
    );
}
