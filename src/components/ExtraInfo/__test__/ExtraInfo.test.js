import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import ExtraInfo from '..';
import { formatEmissions } from '../../../utils/utils';

describe('ExtraInfo Component', () => {
  const mockMeta = {
    bodystyles: ['Sedan'],
    drivetrain: ['AWD'],
    emissions: {
      template: 'EURO',
      value: 100,
    },
    passengers: 5,
  };

  it('renders the ExtraInfo component with correct data', () => {
    const { getByText } = render(<ExtraInfo meta={mockMeta} />);

    expect(getByText('Body style: Sedan')).toBeInTheDocument();
    expect(
      getByText(`Emission: ${formatEmissions(mockMeta.emissions)}`)
    ).toBeInTheDocument();
    expect(getByText('Passengers: 5')).toBeInTheDocument();
    expect(getByText('Drive train: AWD')).toBeInTheDocument();
  });
});
