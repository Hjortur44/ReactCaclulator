import classnames from 'classnames';
import s from './Button.module.scss';

type Props = {
  children: React.ReactNode;
  onClick: () => void;
};

export function Button({ children, onClick }: Props): JSX.Element {
  return (
    <button
      className={classnames(s.button)}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
