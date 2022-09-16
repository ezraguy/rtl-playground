import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import Counter from '../components/Counter';
import '@testing-library/jest-dom/extend-expect';

let getByTestId;

beforeEach(() => {
  const counter = render(<Counter />);
  getByTestId = counter.getByTestId;
});

test('Title has the correct text', () => {
  const title = getByTestId('title');
  expect(title.textContent).toBe('My Counter');
});

test('initial value of the counter is 0', () => {
  const CounterValue = getByTestId('counter-value');
  expect(CounterValue.textContent).toBe('0');
});

test('add button gets rendered with the correct symbol', () => {
  const addBtn = getByTestId('add-btn');
  expect(addBtn.textContent).toBe('+');
});

test('subtract button gets rendered with the correct symbol', () => {
  const subBtn = getByTestId('sub-btn');
  expect(subBtn.textContent).toBe('-');
});

test('counter value goes up by 1 when clicking on the add button', () => {
  const addBtn = getByTestId('add-btn');
  const CounterValue = getByTestId('counter-value');
  fireEvent.click(addBtn);
  expect(CounterValue.textContent).toBe('1');
});

test('counter value goes down by 1 when clicking on the subtract button', () => {
  const subBtn = getByTestId('sub-btn');
  const CounterValue = getByTestId('counter-value');
  fireEvent.click(subBtn);
  expect(CounterValue.textContent).toBe('-1');
});
