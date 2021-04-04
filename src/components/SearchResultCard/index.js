import React from 'react';
import { Link } from 'react-router-dom';
import { QuestionCircleOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';

import './index.scss';

// external api returns html, get rid of it.
const stripHTML = (text) => text.replace(/(<([^>]+)>)/gi, '');

const SearchResultCard = ({ id, title, description, imageURL }) => {
  const strippedDesc = stripHTML(description);
  const cleanedDesc = strippedDesc.length > 292 ? `${strippedDesc.slice(0, 291)}...` : strippedDesc;

  return (
    <div className="search-result-card">
      <div className="wrapper">
        <div className="image-wrapper">
          {imageURL ? <img src={imageURL} alt={`${title}`} /> : <div className="no-thumb"><QuestionCircleOutlined /></div>}
        </div>

        <div className="details-wrapper">
          <h2>{title}</h2>
          <div className="description">{cleanedDesc}</div>
          <Link
            to={`/show/${id}/episodes`}
            className="btn-show-episodes"
          >
            <span>Show Episode</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

SearchResultCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageURL: PropTypes.string,
}

SearchResultCard.defaultProps = {
  imageURL: null,
}

export default SearchResultCard;
