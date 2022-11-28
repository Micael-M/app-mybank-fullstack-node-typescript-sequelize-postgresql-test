import * as C from './styles'

export const Balance = ({ title, value}) => {

  return (
    <C.Container>
      <C.Header>
        <C.HeaderTitle>{title}</C.HeaderTitle>
      </C.Header>
      <C.Total>R$: {value}</C.Total>
    </C.Container>
  );
};
