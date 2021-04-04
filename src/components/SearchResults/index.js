import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import SearchResultCard from '../SearchResultCard';

import { search } from '../../store/shows';

import './index.scss';

const SearchResults = ({ match }) => {
  const dispatch = useDispatch();
  const { results } = useSelector((state) => state.shows);

  useEffect(() => {
    if (match && match.params && match.params.text) {
      const searchText = match.params.text;
      // console.log(`SearchResults searching for: ${searchText}`);
      dispatch(search({ searchText: encodeURIComponent(searchText) }));
    }
  }, [match]);

  if (!results) return <div className="search-results" />;

  return (
    <div className="search-results">
      {results.map((result) => (
        <SearchResultCard
          key={result.show.id}
          id={result.show.id}
          title={result.show.name}
          imageURL={result.show.image ? result.show.image.medium : null}
          description={result.show.summary}
        />
      ))}

    </div>
  );
};

SearchResults.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      text: PropTypes.string,
    }).isRequired,
  }).isRequired,
}
export default SearchResults;
