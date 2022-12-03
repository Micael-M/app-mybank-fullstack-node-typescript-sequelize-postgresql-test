import * as C from './styles';

export const Button = ({ type = 'button', Text, onClick, disabled }) => {
  return (
    <C.Button
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      {Text}
    </C.Button>
  );
};
