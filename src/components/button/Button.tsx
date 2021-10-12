import classnames from 'classnames';
import React from 'react';

type Props = {
  name: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export function Button({ name, onClick }: Props): JSX.Element {
  return (
    <button
      type="button"
      name={name}
      onClick={onClick}
    >
      {name}
    </button>
  );
}
