import React from 'react';
import '@testing-library/jest-dom';
import renderWithProviders from '../../../utils/test-utils';
import VehicleCard from '..';

describe('VehicleCard Component', () => {
  const mockData = {
    id: 'XE',
    price: '$20,000',
    description: 'Sample description',
    modelYear: '2023',
    media: [{ url: 'sample-image.jpg' }],
    meta: {
      bodystyles: ['Sedan'],
      drivetrain: ['Front-Wheel Drive'],
      emissions: {
        template: 'CO2 Emissions $value g/km',
        value: 100,
      },
      passengers: 5,
    },
    index: 0,
  };

  it('renders the VehicleCard component with correct data', () => {
    const { getByText, getByTestId } = renderWithProviders(
      <VehicleCard
        id={mockData.id}
        price={mockData.price}
        description={mockData.description}
        modelYear={mockData.modelYear}
        media={mockData.media}
        meta={mockData.meta}
        index={mockData.index}
      />
    );

    expect(getByText('Sample description')).toBeInTheDocument();
    expect(getByText('XE')).toBeInTheDocument();
    expect(getByText('From $20,000')).toBeInTheDocument();
    expect(getByTestId('card-container')).toBeInTheDocument();
  });

  it('applies correct animation delay based on the index', () => {
    const { container } = renderWithProviders(
      <VehicleCard
        id={mockData.id}
        price={mockData.price}
        description={mockData.description}
        modelYear={mockData.modelYear}
        media={mockData.media}
        meta={mockData.meta}
        index={1}
      />
    );

    const style = window.getComputedStyle(container.firstChild);
    expect(style.animationDelay).toBe('200ms');
  });

  it('renders ImageWrapper and TextContent components', () => {
    const { getByTestId } = renderWithProviders(
      <VehicleCard
        id={mockData.id}
        price={mockData.price}
        description={mockData.description}
        modelYear={mockData.modelYear}
        media={mockData.media}
        meta={mockData.meta}
        index={mockData.index}
      />
    );

    expect(getByTestId('image-wrapper')).toBeInTheDocument();
    expect(getByTestId('text-content')).toBeInTheDocument();
  });
});
