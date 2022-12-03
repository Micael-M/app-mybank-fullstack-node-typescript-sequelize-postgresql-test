import styled from 'styled-components';

export const Container = styled.div`
  justify-content:space-between;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.4);
  color: black;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 9px 15px;
  width: 40%;

  @media (max-width: 750px) {
    width: 20%;
    p {
      font-size: 12px;
    }
    span {
      font-size: 20px;
    }
  };
`;

export const Header = styled.header`
  align-items: center;
  display: flex;
  gap: 10px;
  justify-content: space-around;
  width: 100%;
`;

export const HeaderTitle = styled.p`
  font-size: 2rem;
`;

export const Button = styled.button`
  background-color: #6760FA;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  color: #FFFFFF;
  display: inline-block;
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 10px;
  height: 30%;
  padding: 10px 5px 10px 5px;
  text-decoration: none;
  width: 100%;
  text-align: center;
  &:active {
    background-color: #534fd6;
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;

export const Transfer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

  export const Input = styled.input`
  border-radius: 5px;
  border: 2px solid #c4c4c4;
  color: #939393;
  font-size: 1.2rem;
  font-weight: 400;
  height: 35px;
  line-height: 10px;
  margin: 10px 0;
  outline: none;
  padding: 10px 5px;
  /* text-decoration: none; */
  width: ${(props) => (props.width ? props.width + "%" : "auto")};
  text-align: center;
`;
