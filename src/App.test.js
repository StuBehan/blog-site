import { render, screen } from '@testing-library/react';
import App from './App';

test('renders blog app title', () => {
  render(<App />);
  const text = screen.getByText(/Blog App/i);
  expect(text).toBeInTheDocument();
});
