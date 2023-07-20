import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.40), rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.45)), 
    url(${({ src }) => (src ? `../images/misc/${src}.jpg` : '../images/misc/home-bg.jpg')}) top left / cover
    no-repeat;
  border-bottom: 8px solid #222;
  
  @media (max-width: 1100px) {
    ${({ dontShowOnSmallViewPort }) => dontShowOnSmallViewPort && `background: none;`}
  }
`;

export const Container = styled.div`
  display: flex;
  margin: 0 56px;
  height: 100px;
  justify-content: space-between;
  align-items: center;
  a {
    display: flex;
  }
  @media (max-width: 1000px) {
    margin: 0 30px;
  }
`;

export const Feature = styled(Container)`
  padding: 150px 0 500px 0;
  flex-direction: column;
  align-items: normal;
  width: 50%;
  @media (max-width: 1100px) {
    display: none;
  }
`;

export const FeatureHeading = styled.h1`
  color: white;
  font-size: 50px;
  line-height: normal;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
  margin: 0 0 20px;
`;

export const Text = styled.p`
  color: white;
  font-size: 22px;
  line-height: normal;
  text-shadow: 2px 2px 4px rgba(0,0,0, .45);
  margin: 0;
`;

export const Link = styled.p`
  color: #fff;
  text-decoration: none;
  margin-right: 30px;
  font-weight: ${({ active }) => (active === 'true' ? '700' : 'normal')};
  cursor: pointer;
  &:hover {
    font-weight: bold;
  }
  &:last-of-type {
    margin-right: 0;
  }
`;

export const ButtonLink = styled(ReactRouterLink)`
  display: block;
  background-color: #e50914;
  width: 84px;
  height: fit-content;
  color: white;
  border: 0;
  font-size: 15px;
  border-radius: 3px;
  padding: 8px 17px;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    background: #f40612;
  }
`;

export const Picture = styled.button`
  background: url(${({ src }) => src});
  background-size: contain;
  border: 0;
  width: 36px;
  height: 36px;
  cursor: pointer;
`;

export const Logo = styled.img`
  height: 36px;
  width: 134px;
  margin-right: 40px;
@media(min-width: 1449px) {
  height: 45px;
  width: 167px;
}
`;

export const Group = styled.div`
  display: flex;
  align-items: center;  
`;

export const PlayButton = styled.button`
  box-shadow: 0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35);
  background-color: #e6e6e6;
  color: #000;
  border-width: 0;
  padding: 10px 20px;
  border-radius: 5px;
  max-width: 130px;
  font-weight: bold;
  font-size: 20px;
  margin-top: 15px;
  cursor: pointer;
  transition: background-color 0.5s ease;
  
  &:hover {
    background-color: #ff1e1e;
    color: white;
  }
`;

export const Search = styled.div`
  display: flex;
  align-items: center;

  svg {
    cursor: pointer;
    color: white;
  }
  @media (max-width: 700px) {
    display: none;
  }
`;

export const SearchIcon = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: 0;

  img {
    filter: brightness(0) invert(1);
    width: 16px;
  }
`;

export const SearchInput = styled.input`
  background-color: #44444459;
  color: white;
  border: 1px solid #fff;
  border-radius: 2px;
  transition: width .5s;
  height: 30px;
  font-size: 14px;
  margin-left: ${({ active }) => active === true ? '10px' : '0'};
  padding: ${({ active }) => active === true ? '0 10px' : '0'};
  opacity: ${({ active }) => active === true ? '1' : '0'};
  width: ${({ active }) => active === true ? '200px' : '0'};
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  position: relative;      
  transition: display 2.5s;

  button {
    cursor: pointer;
  }
`;

export const Dropdown = styled.div`
  display: none;
  position: absolute;
  background-color: black;
  border-radius: 2px;
  padding: 10px;
  width: auto;
  top: 32px;
  right: 10px;  
  
  ${Group}:last-of-type ${Link} {
    cursor: pointer;
  }
  ${Group} {
    margin-bottom: 10px;
    &:last-of-type {
      margin-bottom: 0;
    }
    ${Link} {
      cursor: pointer;
    }
    ${Picture} {
      cursor: default;
    }
  }
  button {
    margin-right: 10px;
  }
  p {
    font-size: 12px;
    margin-bottom: 0;
    margin-top: 0;
  }
  ${Profile}:hover & {
    display: block;
    flex-direction: column;
  }
`;
