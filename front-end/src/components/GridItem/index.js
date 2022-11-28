import * as C from './styles';
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
} from 'react-icons/fa';

export const GridItem = ({ item, transaction }) => {

  return (
    <C.Tr>
      <C.Td>{transaction === 'credited' ?
        item.debitedAccountId : item.creditedAccountId}</C.Td>
      <C.Td alignCenter>{item.createdAt}</C.Td>
      <C.Td alignCenter>
        <span>R$: {item.value/100}  </span>
        {transaction === 'credited' ? (
          <FaRegArrowAltCircleDown color="green" />
        ) : (
          <FaRegArrowAltCircleUp color="red" />
        )}
      </C.Td>
      {/* <C.Td alignCenter> */}
      {/* <FaTrash onClick={() => onDelete(item.id)} /> */}
      {/* </C.Td> */}
    </C.Tr>
  );
};
