import styled from "styled-components";

export const Tr = styled.tr``;

export const Td = styled.td`
  padding-top: 15px;
  font-weight: 200;
  font-size: 0.87rem;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  word-break: break-all;
  svg {
    width: 13px;
    height: 13px;
  }
`;
