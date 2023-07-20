import React from 'react';
import { Accordion, OptForm } from '../components';
import faqData from '../fixtures/FAQ.json';

export const FaqContainer = () => {
  return (
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

      <OptForm>
        <OptForm.Text>
          Ready to watch? Enter your e-mail to create or restart your membership.
        </OptForm.Text>
        <OptForm.Input placeholder="E-mail adress" />
        <OptForm.Button>Get Started</OptForm.Button>
      </OptForm>
    </Accordion>
  );
};
