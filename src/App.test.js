import { render, screen } from '@testing-library/react';
import App from './App';
import Counter from './components/Counter';
import '@testing-library/jest-dom/extend-expect';

test('Title has the correct text', () => {
  render(<App />);
  const linkElement = screen.getByText(/My Counter/i);
  expect(linkElement).toBeInTheDocument();
});

test('initial value of the counter is 0', () => {
  const { getByTestId } = render(<Counter />);
  const CounterValue = getByTestId('counter-value');
  expect(CounterValue.textContent).toBe('0');
});
