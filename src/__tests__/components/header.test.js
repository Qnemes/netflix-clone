import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Header } from '../../components';

jest.mock('react-router-dom');

describe('<Header />', () => {
  it('renders the basic <Header /> with a background', () => {
    const { container, getByText, getByTestId, debug } = render(
      <Header>
        <Header.Frame>
          <Header.Logo to="/" src="/logo.svg" alt="Zetflix" />
          <Header.TextLink active="true">Hello I am a link!</Header.TextLink>
        </Header.Frame>
      </Header>
    );

    expect(getByText('Hello I am a link!')).toBeTruthy();
    expect(getByTestId('header-bg')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders the basic <Header /> without a background', () => {
    const { container, getByText, queryByTestId, debug } = render(
      <Header bg={false}>
        <Header.Frame>
          <Header.Logo to="/" src="/logo.svg" alt="Zetflix" />
          <Header.ButtonLink>Sign In</Header.ButtonLink>
          <Header.TextLink active={false}>Hello I am a link!</Header.TextLink>
        </Header.Frame>
      </Header>
    );

    expect(getByText('Hello I am a link!')).toBeTruthy();
    expect(queryByTestId('header-bg')).toBeFalsy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders the full <Header> with a background', () => {
    const { container, getByText, getByTestId } = render(
      <Header src="jokerBG" dontShowOnSmallViewPort>
        <Header.Frame>
          <Header.Group>
            <Header.Logo to="/" src="/images/logo.svg" alt="Zetflix" />
            <Header.TextLink active={false} onClick={() => {}}>
              Series
            </Header.TextLink>
            <Header.TextLink active onClick={() => {}}>
              Films
            </Header.TextLink>
          </Header.Group>
          <Header.Group>
            <Header.Search searchTerm="Joker" setSearchTerm={() => {}} />
            <Header.Profile>
              <Header.Picture src="/images/qnemes.png" />
              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture src="/images/qnemes.png" />
                  <Header.TextLink>Qnemes</Header.TextLink>
                </Header.Group>
                <Header.Group>
                  <Header.TextLink onClick={() => {}}>Sign out</Header.TextLink>
                </Header.Group>
              </Header.Dropdown>
            </Header.Profile>
          </Header.Group>
        </Header.Frame>

        <Header.Feature>
          <Header.FeatureHeading>Watch Joker Now</Header.FeatureHeading>
          <Header.Text>Forever alone in a crowd...</Header.Text>
          <Header.PlayButton>Play</Header.PlayButton>
        </Header.Feature>
      </Header>
    );

    expect(getByTestId('search-input')).toBeTruthy();
    expect(getByTestId('search-input').value).toBe('Joker');
    fireEvent.change(getByTestId('search-input'), { target: { value: 'Simpsons' } });
    fireEvent.click(getByTestId('search-click'));

    expect(getByText('Series')).toBeTruthy();
    expect(getByText('Films')).toBeTruthy();
    expect(getByText('Qnemes')).toBeTruthy();
    expect(getByText('Watch Joker Now')).toBeTruthy();
    expect(getByText('Sign out')).toBeTruthy();
    expect(getByText('Forever alone in a crowd...')).toBeTruthy();
    expect(getByText('Play')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
