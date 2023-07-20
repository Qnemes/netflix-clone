import React, { useState, useContext, createContext } from 'react';
import { Container, Inner, Header, Title, Frame, Item, Body } from './styles/accordion';

const ToggleContext = createContext();

export default function Accordion({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
}

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
Accordion.Frame = function AccordionFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
};
Accordion.Item = function AccordionItem({ children, ...restProps }) {
  const [isToggle, setIsToggle] = useState(false);

  return (
    <ToggleContext.Provider value={{ isToggle, setIsToggle }}>
      <Item {...restProps}>{children}</Item>
    </ToggleContext.Provider>
  );
};
Accordion.Header = function AccordionHeader({ children, ...restProps }) {
  const { isToggle, setIsToggle } = useContext(ToggleContext);

  return (
    <Header onClick={() => setIsToggle((isToggle) => !isToggle)} {...restProps}>
      {children}
      {isToggle ? (
        <img src="/images/icons/close-slim.png" alt="Close" />
      ) : (
        <img src="/images/icons/add.png" alt="Open" />
      )}
    </Header>
  );
};
Accordion.Body = function AccordionBody({ children, ...restProps }) {
  const { isToggle } = useContext(ToggleContext);

  return (
    <Body className={isToggle ? 'open' : 'closed'} {...restProps}>
      <span>{children}</span>
    </Body>
  );
};
