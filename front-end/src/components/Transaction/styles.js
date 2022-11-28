import styled from 'styled-components';

export const Container = styled.div`
  justify-content:center;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.4);
  color: black;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 5%;
  padding: 25px 15px;
  max-width: 1120px;
  width: 78%;

  @media (max-width: 750px) {
    width: 20%;
    p {
      font-size: 1.2rem;
    }
    span {
      font-size: 1.2rem;
    }
  };
`;

export const Header = styled.header`
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: space-around;
  width: 100%;
`;

export const HeaderTitle = styled.p`
  font-size: 2rem;
`;

export const Filter = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  gap: 10px;
  justify-content: space-around;
  width: 100%;
`;

export const Button = styled.button`
  background-color: #6760FA;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  color: #FFFFFF;
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 10px;
  height: 40px;
  padding: 10px 5px 10px 5px;
  text-decoration: none;
  width: 20%;
  text-align: center;
`;

export const Input = styled.input`
  border-radius: 5px;
  border: 2px solid #c4c4c4;
  color: #939393;
  font-size: 1.2rem;
  font-weight: 400;
  height: 40px;
  line-height: 10px;
  outline: none;
  /* padding: 10px 5px; */
  /* text-decoration: none; */
  width: 40%;
  text-align: center;
`;

export const Hr = styled.hr`
  /* border-radius: 5px; */
  /* align-items: center; */
  border: 1px solid #c4c4c4;
  color: #939393;
  /* font-size: 20px; */
  margin: 30px auto;
  /* font-weight: 400; */
  /* line-height: 10px; */
  /* height: 40px; */
  /* outline: none; */
  /* padding: 10px 5px; */
  /* text-decoration: none; */
  width: 90%;
  /* text-align: center; */
`;
