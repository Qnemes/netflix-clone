import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 165px 45px;
`;

export const Title = styled.h1`
  color: white;
  max-width: 650px;
  font-size: 50px;
  font-weight: 600;
  margin: 0 auto;
  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

export const Subtitle = styled.h2`
  color: white;
  max-width: 650px;
  font-size: 26px;
  font-weight: normal;
  margin: 16px auto;
  @media (max-width: 600px) {
    font-size: 35px;
  }
`;