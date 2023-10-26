import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import ImageWrapper from '..';

describe('ImageWrapper Component', () => {
  const mockMedia = [
    { url: '/path/to/image1.jpg' },
    { url: '/path/to/image2.jpg' },
  ];

  it('renders the ImageWrapper component with provided media and alt text', () => {
    const altText = 'Sample Alt Text';
    const { getByAltText, getByTestId } = render(
      <ImageWrapper media={mockMedia} altText={altText} />
    );

    expect(getByAltText(altText)).toBeInTheDocument();

    expect(getByTestId('card-image')).toBeInTheDocument();
  });

  it('renders the ImageWrapper component with media[0] for smaller screens', () => {
    const altText = 'Sample Alt Text';
    const { getByTestId } = render(
      <ImageWrapper media={mockMedia} altText={altText} />
    );

    const image = getByTestId('card-image');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', mockMedia[0].url);
  });
});
