import React from 'react';
import { render } from '@testing-library/react';
import { Jumbotron } from '../../components';
import jumbotronData from '../../fixtures/jumbotron.json';

describe('<Jumbotron />', () => {
  it('renders the <Jumbotron /> with populated data', () => {
    const { container, getByText, getByAltText, getByTestId } = render(
      <Jumbotron.Container>
        {jumbotronData.map((item) => (
          <Jumbotron key={item.id}>
            <Jumbotron.Pane>
              <Jumbotron.Title>{item.title}</Jumbotron.Title>
              <Jumbotron.Subtitle>{item.subTitle}</Jumbotron.Subtitle>
            </Jumbotron.Pane>
            <Jumbotron.Pane>
              <Jumbotron.Image src={item.image} alt={item.alt} data-testid={`${item.id}-jumbo-image`} />
            </Jumbotron.Pane>
          </Jumbotron>
        ))}
      </Jumbotron.Container>
    );

    expect(getByText('Enjoy on your TV.')).toBeTruthy();
    expect(getByAltText('Tiger King on Zetflix')).toBeTruthy();
    expect(getByTestId('1-jumbo-image')).toBeTruthy();
    expect(
      getByText(
        'Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.'
      )
    ).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
