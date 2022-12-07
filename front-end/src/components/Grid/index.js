import React from 'react';
import { GridItem } from '../GridItem';
import * as C from './styles';

export const Grid = ({ data , transaction}) => {

  return (
    <C.Table>
      <C.Thead>
        <C.Tr>
          <C.Th width={30}>Origem</C.Th>
          <C.Th width={30}>Data</C.Th>
          <C.Th width={20} alignCenter>
            Valor
          </C.Th>
        </C.Tr>
      </C.Thead>
      <C.Tbody>
        {data?.map((item, index) => (
          <GridItem key={index} item={item} transaction={transaction}/>
        ))}
      </C.Tbody>
    </C.Table>
  );
};
