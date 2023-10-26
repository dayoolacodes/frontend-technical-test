import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { FullPageSpinner, Spinner } from '..';

describe('FullPageSpinner Component', () => {
  it('renders the FullPageSpinner component', () => {
    const { getByTestId } = render(<FullPageSpinner />);
    const loadingElement = getByTestId('loading');
    expect(loadingElement).toBeInTheDocument();
  });
});

describe('Spinner Component', () => {
  it('renders the Spinner component', () => {
    const { getByLabelText } = render(<Spinner />);
    const spinnerElement = getByLabelText('loading');
    expect(spinnerElement).toBeInTheDocument();
  });
});
