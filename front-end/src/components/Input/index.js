import * as C from './styles';

export const Input = ({ type, placeholder, value, onChange }) => {
  return (
    <C.Input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};
