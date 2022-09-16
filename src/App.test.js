import { render, screen, fireEvent } from '@testing-library/react';
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

test('add button gets rendered with the correct symbol', () => {
  const { getByTestId } = render(<Counter />);
  const addBtn = getByTestId('add-btn');
  expect(addBtn.textContent).toBe('+');
});

test('subtract button gets rendered with the correct symbol', () => {
  const { getByTestId } = render(<Counter />);
  const subBtn = getByTestId('sub-btn');
  expect(subBtn.textContent).toBe('-');
});

test('counter value goes up by 1 when clicking on the add button', () => {
  const { getByTestId } = render(<Counter />);
  const addBtn = getByTestId('add-btn');
  const CounterValue = getByTestId('counter-value');
  fireEvent.click(addBtn);
  expect(CounterValue.textContent).toBe('1');
});

test('counter value goes down by 1 when clicking on the subtract button', () => {
  const { getByTestId } = render(<Counter />);
  const subBtn = getByTestId('sub-btn');
  const CounterValue = getByTestId('counter-value');
  fireEvent.click(subBtn);
  expect(CounterValue.textContent).toBe('-1');
});
