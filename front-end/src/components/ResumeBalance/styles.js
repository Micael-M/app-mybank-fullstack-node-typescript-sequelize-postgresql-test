import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.4);

  color: black;
  display: flex;
  flex-direction: column;
  justify-content:space-between;
  margin: 0 auto;
  padding: 5px 15px;
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

export const Total = styled.span`
  color: #939393;
  font-size: 2em;
  font-weight: bold;
`;