import React from 'react';
import VehicleList from '../index';
import useData from '../useData';
import renderWithProviders from '../../../utils/test-utils';

jest.mock('../useData', () => {
  return {
    __esModule: true,
    default: jest.fn(),
  };
});

describe('<VehicleList /> Tests', () => {
  it('Should show loading state if it is not falsy', () => {
    useData.mockReturnValueOnce([true, 'An error occurred', []]);
    const { queryByTestId } = renderWithProviders(<VehicleList />);
    expect(queryByTestId('loading')).not.toBeNull();
    expect(queryByTestId('error')).toBeNull();
    expect(queryByTestId('results')).toBeNull();
  });

  it('Should show error if it is not falsy and loading is finished', () => {
    useData.mockReturnValue([false, 'An error occurred', []]);
    const { queryByTestId } = renderWithProviders(<VehicleList />);

    expect(queryByTestId('loading')).toBeNull();
    expect(queryByTestId('error')).not.toBeNull();
    expect(queryByTestId('results')).toBeNull();
  });

  it('Should show results if loading successfully finished', () => {
    const vehicles = [
      {
        id: 'xe',
        description: 'dummy',
        price: '£200',
        modelYear: 'k17',
        media: [
          { name: 'vehicle', url: '/images/16x9/xe_k17.jpg' },
          { name: 'vehicle', url: '/images/1x1/xe_k17.jpg' },
        ],
        meta: {
          bodystyles: ['salon'],
        },
      },
      {
        id: 'ftype',
        description: 'dummy2',
        price: '£300',
        modelYear: 'k18',
        media: [
          { name: 'vehicle', url: '/images/16x9/xe_k17.jpg' },
          { name: 'vehicle', url: '/images/1x1/xe_k17.jpg' },
        ],
        meta: {
          bodystyles: ['suv'],
        },
      },
    ];
    useData.mockReturnValue([false, false, vehicles]);
    const { queryByTestId } = renderWithProviders(<VehicleList />);

    expect(queryByTestId('loading')).toBeNull();
    expect(queryByTestId('error')).toBeNull();
    expect(queryByTestId('results')).not.toBeNull();
  });
});
