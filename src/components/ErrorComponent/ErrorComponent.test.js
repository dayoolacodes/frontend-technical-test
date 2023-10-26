import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import ErrorComponent from './index';

describe('ErrorComponent', () => {
  it('renders the ErrorComponent with the provided error message', () => {
    const errorMessage = 'An error occurred';
    const { getByTestId } = render(<ErrorComponent error={errorMessage} />);
    const errorElement = getByTestId('error');

    expect(errorElement).toBeInTheDocument();
    expect(errorElement).toHaveTextContent(errorMessage);
  });
});
