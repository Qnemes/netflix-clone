import React, { useContext, useState, useEffect, Fragment } from 'react';
import Fuse from 'fuse.js';
import { FirebaseContext } from '../context/firebase';
import { SelectProfileContainer } from './profiles';
import { Card, Header, Loading, Player } from '../components';
import { FooterContainer } from './footer';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';

export const BrowseContainer = ({ slides }) => {
  const [category, setCategory] = useState('series');
  const [searchTerm, setSearchTerm] = useState('');
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [slidesRows, setSlidesRows] = useState([]);

  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(loadingTimeout);
  }, [profile.displayName]);

  useEffect(() => {
    setSlidesRows(slides[category]);
  }, [slides, category]);

  useEffect(() => {
    const fuse = new Fuse(slidesRows, { keys: ['data.title'] });
    const results = fuse.search(searchTerm).map(({ item }) => item);

    if (slidesRows.length > 0 && searchTerm.length > 3 && results.length > 0) {
      setSlidesRows(results);
    } else {
      setSlidesRows(slides[category]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]);

  return profile.displayName ? (
    <Fragment>
      {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}
      <Header src="jokerBG" dontShowOnSmallViewPort>
        <Header.Frame>
          <Header.Group>
            <Header.Logo to={ROUTES.HOMEPAGE} src={logo} alt="Zetflix" />
            <Header.TextLink
              active={category === 'series' ? 'true' : 'false'}
              onClick={() => setCategory('series')}
            >
              Series
            </Header.TextLink>
            <Header.TextLink
              active={category === 'films' ? 'true' : 'false'}
              onClick={() => setCategory('films')}
            >
              Films
            </Header.TextLink>
          </Header.Group>
          <Header.Group>
            <Header.Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <Header.Profile>
              <Header.Picture src={user.photoURL} />
              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture src={user.photoURL} />
                  <Header.TextLink>{user.displayName}</Header.TextLink>
                </Header.Group>
                <Header.Group>
                  <Header.TextLink onClick={() => firebase.auth().signOut()}>Sign out</Header.TextLink>
                </Header.Group>
              </Header.Dropdown>
            </Header.Profile>
          </Header.Group>
        </Header.Frame>

        <Header.Feature>
          <Header.FeatureHeading>Watch Joker Now</Header.FeatureHeading>
          <Header.Text>
            Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the
            streets of Gotham City. Arthur wears two masks -- the one he paints for his day job as a
            clown, and the guise he projects in a futile attempt to feel like he's part of the world
            around him.
          </Header.Text>
          <Header.PlayButton>Play</Header.PlayButton>
        </Header.Feature>
      </Header>

      <Card.Group>
        {slidesRows.map((slidesItem) => (
          <Card key={`${category}-${slidesItem.title.toLowerCase()}`}>
            <Card.Title>{slidesItem.title}</Card.Title>
            <Card.Entities>
              {slidesItem.data.map((item) => (
                <Card.Item key={item.docId} item={item}>
                  <Card.Image src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`} />
                  <Card.Meta>
                    <Card.SubTitle>{item.title}</Card.SubTitle>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Meta>
                </Card.Item>
              ))}
            </Card.Entities>
            <Card.Feature category={category}>
              <Player>
                <Player.Button />
                <Player.Video src="/videos/bunny.mp4" />
              </Player>
            </Card.Feature>
          </Card>
        ))}
      </Card.Group>
      <FooterContainer></FooterContainer>
    </Fragment>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
};
