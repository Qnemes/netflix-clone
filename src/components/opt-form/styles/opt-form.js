import styled from 'styled-components/macro';

export const Container = styled.div`
  display:flex;
  justify-content: center;
  height: 100%;
  margin-top: 20px;
  flex-wrap: wrap;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Input = styled.input`
  max-width: 450px;
  width: 100%;
  border: 0;
  padding: 10px;
  height: 60px;
  box-sizing: border-box;
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
  border-right-color: rgb(51,51,51);
  border-right-style: solid;
  border-right-width: 1px;

  @media (max-width: 1000px) {
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  height: 60px;
  background: #e50914;
  color: white;
  padding: 0 26px;
  font-size: 26px;
  border: 0;
  border-left-color: rgb(51,51,51);
  border-left-style: solid;
  border-left-width: 1px;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
  cursor: pointer;

  img {
    margin-left: 10px;
    filter: brightness(0) invert(1);
    width: 24px;

    @media (max-width: 1000px) {
      width: 16px;

    }
  }

  &:hover {
    background: #f40612;
  }

  @media (max-width: 1000px) {
    height: 50px;
    padding: 0 16px;
    font-size: 16px;
    margin-top: 20px;
    font-weight: bold;
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;
  }
`;

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;

export const Text = styled.p`
  font-size: 19.2px;
  color: white;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 22px;
  }
`;
