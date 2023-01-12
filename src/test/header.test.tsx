import { render, screen } from '@testing-library/react';
import { Header } from '../components/Header';

test('title is there', () => {
  render(<Header />);
  const linkElement = screen.getByText(/Device Manager/i);
  expect(linkElement).toBeInTheDocument();
});


test('Logo is working', () => {
  render(<Header />);
  const linkElement = screen.getByAltText(/Ninja one logo/i);
  expect(linkElement).toBeInTheDocument();
});
