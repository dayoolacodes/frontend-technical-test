import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

import { formatEmissions } from '../../utils/utils';

export default function ExtraInfo({ meta }) {
  return (
    <div className="vehicle--extra-info expand">
      <p>{`Body style: ${meta.bodystyles[0]}`}</p>
      <p>{`Emission: ${formatEmissions(meta.emissions)}`}</p>
      <p>{`Passengers: ${meta.passengers}`}</p>
      <p>{`Drive train: ${meta.drivetrain[0]}`}</p>
    </div>
  );
}

ExtraInfo.propTypes = {
  meta: PropTypes.shape({
    bodystyles: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    drivetrain: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    emissions: PropTypes.shape({
      template: PropTypes.string,
      value: PropTypes.number,
    }),
    passengers: PropTypes.number.isRequired,
  }).isRequired,
};
