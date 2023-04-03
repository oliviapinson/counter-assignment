// import necessary react testing library helpers here
// import the Counter component here
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const mess = screen.getByText(/count/i);
  expect(mess).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const countElement = screen.getByTestId("count");
  expect(countElement).toHaveTextContent("0");
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const countElem = screen.getByTestId("count");
  const incrementButton = screen.getByText("+");
  fireEvent.click(incrementButton);
  expect(countElem).toHaveTextContent("1");
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const countElem = screen.getByTestId("count");
  const decrementButton = screen.getByText("-");
  fireEvent.click(decrementButton);
  expect(countElem).toHaveTextContent("-1");
});
