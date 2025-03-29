import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Introduction from '../Introduction';

describe('Introduction Component', () => {
  test('renders the introduction container', () => {
    render(<Introduction />);
    const container = screen.getByTestId('introduction');
    expect(container).toBeInTheDocument();
  });

  test('renders the heading', () => {
    render(<Introduction />);
    const heading = screen.getByText(/Welcome to the Kumar Chandra Jana Website/i);
    expect(heading).toBeInTheDocument();
  });

  test('renders the paragraph', () => {
    render(<Introduction />);
    const paragraph = screen.getByText(/Learn more about the life and achievements of Kumar Chandra Jana./i);
    expect(paragraph).toBeInTheDocument();
  });

  test('renders the button and handles click', () => {
    render(<Introduction />);
    const button = screen.getByText(/Explore Biography/i);
    expect(button).toBeInTheDocument();

    // Mock window.location.href
    delete window.location;
    window.location = { href: '' };

    fireEvent.click(button);
    expect(window.location.href).toBe('/biography');
  });
});