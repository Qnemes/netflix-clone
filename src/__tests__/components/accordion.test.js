import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import faqData from '../../fixtures/FAQ.json';
import { Accordion } from '../../components';

describe('<Accordion />', () => {
  it('renders the <Accordion /> with populated data', () => {
    const { container, getByText } = render(
      <Accordion>
        <Accordion.Title>Frequently Asked Questions</Accordion.Title>
        <Accordion.Frame>
          {faqData.map((item) => (
            <Accordion.Item key={item.id}>
              <Accordion.Header>{item.header}</Accordion.Header>
              <Accordion.Body>{item.body}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion.Frame>
      </Accordion>
    );

    expect(getByText('Frequently Asked Questions')).toBeTruthy();
    expect(getByText('What is Zetflix?')).toBeTruthy();
    expect(getByText('How much does Zetflix cost?')).toBeTruthy();
    expect(getByText('Where can I watch?')).toBeTruthy();
    expect(getByText('How do I cancel?')).toBeTruthy();
    expect(getByText('What can I watch on Zetflix?')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('opens and closes the <Accordion /> component', () => {
    const { container, queryByText, getByTestId } = render(
      <Accordion>
        <Accordion.Title>Frequently Asked Questions</Accordion.Title>
        <Accordion.Frame>
          {faqData.map((item) => (
            <Accordion.Item key={item.id}>
              <Accordion.Header>{item.header}</Accordion.Header>
              <Accordion.Body data-testid="accordion-body">{item.body}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion.Frame>
      </Accordion>
    );

    const whatIsZetflixBodyText = `
    <span>
    Zetflix is a streaming service that offers a wide variety of award-winning TV programmes, films, anime, documentaries and more – on thousands of internet-connected devices.
    You can watch as much as you want, whenever you want, without a single advert – all for one low monthly price. There's always something new to discover, and new TV programmes and films are added every week!
    </span>
    `;

    expect(queryByText(whatIsZetflixBodyText)).toBeFalsy();
    fireEvent.click(queryByText('What is Zetflix?'));
    expect(whatIsZetflixBodyText).toBeTruthy();

    fireEvent.click(queryByText('What is Zetflix?'));
    expect(queryByText(whatIsZetflixBodyText)).toBeFalsy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
