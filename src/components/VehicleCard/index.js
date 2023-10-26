import React from 'react';
import PropTypes from 'prop-types';
import ImageWrapper from './ImageWrapper';
import './style.scss';
import TextContent from './TextContent';

export default function VehicleCard({
  id,
  description,
  price,
  media,
  modelYear,
  meta,
  index,
}) {
  return (
    <div
      className="card-container"
      style={{ animationDelay: `${index * 200}ms` }}
      data-testid="card-container"
    >
      <ImageWrapper altText={id + modelYear} media={media} />
      <TextContent
        {...{
          id,
          description,
          price,
          meta,
        }}
      />
    </div>
  );
}

VehicleCard.propTypes = {
  id: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  modelYear: PropTypes.string.isRequired,
  media: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
  meta: PropTypes.shape({
    bodystyles: PropTypes.arrayOf(PropTypes.string.isRequired),
    drivetrain: PropTypes.arrayOf(PropTypes.string.isRequired),
    emissions: PropTypes.shape({
      template: PropTypes.string,
      value: PropTypes.number,
    }),
    passengers: PropTypes.number,
  }).isRequired,
};
