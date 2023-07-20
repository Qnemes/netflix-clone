import React from 'react';
import { BrowseContainer } from '../containers/browse';
import { selectionFilter } from '../utilities/selection-filter';
import { useContent } from '../hooks/useContent';

export default function Browse() {
  const { series } = useContent('series');
  const { films } = useContent('films');

  const slides = selectionFilter({ series, films });

  return <BrowseContainer slides={slides} />;
}
