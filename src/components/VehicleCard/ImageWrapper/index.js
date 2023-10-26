import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

export default function ImageWrapper({ media, altText }) {
  return (
    <picture className="card-image" data-testid="image-wrapper">
      <source
        srcSet={media[0].url}
        type="image/jpg"
        media="(min-width:768px)"
        alt={altText}
      />
      <img
        src={media[0].url}
        alt={altText}
        className="card-image__default"
        data-testid="card-image"
      />
    </picture>
  );
}

ImageWrapper.propTypes = {
  media: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
  altText: PropTypes.string.isRequired
};
