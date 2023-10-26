import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent } from '@testing-library/react';
import TextContent from '..';
import renderWithProviders from '../../../../utils/test-utils';

describe('TextContent Component', () => {
  const mockData = {
    id: 'xe',
    description: 'Sample description with long characters',
    price: '$20,000'
  };

  it('renders the TextContent component with correct data', () => {
    const { getByText } = renderWithProviders(
      <TextContent
        id={mockData.id}
        price={mockData.price}
        description={mockData.description}
      />,
      {
        preloadedState: {
          modal: {
            isOpen: false,
          },
        },
      }
    );

    expect(getByText('XE')).toBeInTheDocument();
    expect(getByText('From $20,000')).toBeInTheDocument();
    expect(getByText(/\.+\.\.+$/)).toBeInTheDocument();
  });

  it('toggles description between more and less', () => {
    const { getByText } = renderWithProviders(
      <TextContent
        id={mockData.id}
        price={mockData.price}
        description={mockData.description}
      />,
      {
        preloadedState: {
          modal: {
            isOpen: false,
          },
        },
      }
    );

    expect(getByText(/\.+\.\.+$/)).toBeInTheDocument();
    const moreButton = getByText('more');
    fireEvent.click(moreButton);

    expect(
      getByText('Sample description with long characters')
    ).toBeInTheDocument();

    expect(getByText('less')).toBeInTheDocument();
  });
});
