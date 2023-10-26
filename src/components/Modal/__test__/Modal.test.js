import React from 'react';
import '@testing-library/jest-dom';
import Modal from '..';
import renderWithProviders from '../../../utils/test-utils';

describe('Modal Component', () => {
  const mockData = {
    isOpen: true,
    title: 'Sample Modal',
  };

  it('renders the modal with the provided title when isOpen is true', () => {
    const { getByText } = renderWithProviders(
      <Modal isOpen={mockData.isOpen} title={mockData.title}>
        <p>Modal Content</p>
      </Modal>
    );

    expect(getByText('Sample Modal')).toBeInTheDocument();
  });

  it('does not render the modal when isOpen is false', () => {
    const { queryByText } = renderWithProviders(
      <Modal isOpen={false} title={mockData.title}>
        <p>Modal Content</p>
      </Modal>
    );

    expect(queryByText('Sample Modal')).toBeNull();
  });
});
