import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import './style.scss';
import { ellipsis } from '../../../utils/utils';
import { openModal } from '../../../store/modalSlice';

export default function TextContent({ id, price, description }) {
  const [showExtra, setShowExtra] = useState(false);
  const dispatch = useDispatch();

  const click = () => {
    dispatch(openModal({ vehicleId: id }));
  };

  return (
    <div className="text-content" data-testid="text-content">
      <p className="text-content--name">{id.toUpperCase()}</p>
      <p className="text-content--price">{`From ${price}`}</p>
      <p className="text-content--desc">
        {showExtra ? description : ellipsis(description)}
        <button
          type="button"
          className="more-btn"
          onClick={() => setShowExtra(!showExtra)}
        >
          {showExtra ? 'less' : 'more'}
        </button>
      </p>
      <button type="button" onClick={click}>
        More Info
      </button>
    </div>
  );
}

TextContent.propTypes = {
  id: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
