import { render, screen } from '@testing-library/react';
import App from '../../App';

test('renders the navbar with correct links', () => {
  render(<App />);
  const homeLink = screen.getByTestId('Home');
  const biographyLink = screen.getByTestId('Biography');
  const achievementsLink = screen.getByTestId('Achievements');
  const galleryLink = screen.getByTestId('Gallery');
  const contactLink = screen.getByTestId('Contact');
  
  expect(homeLink).toBeInTheDocument();
  expect(biographyLink).toBeInTheDocument();
  expect(achievementsLink).toBeInTheDocument();
  expect(galleryLink).toBeInTheDocument();
  expect(contactLink).toBeInTheDocument();
});

test('renders the logo with correct text', () => {
  render(<App />);
  const logoText = screen.getByTestId('kcjana');
  expect(logoText).toBeInTheDocument();
});

test('renders the Introduction component for the root route', () => {
  render(<App />);
  const introductionText = screen.getByTestId('introduction'); 
  expect(introductionText).toBeInTheDocument();
});

test('renders the Footer component', () => {
  render(<App />);
  const footerElement = screen.getByTestId('footer'); // Assuming Footer component has this text
  expect(footerElement).toBeInTheDocument();
});