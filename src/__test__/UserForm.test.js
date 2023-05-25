import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import UserForm from '../components/UserForm';

test('it should show two inputs and a button', () => {
  // render the component
  render(<UserForm />);

  // manipulate the component and find an element in it
  const inputs = screen.getAllByRole('textbox');
  const button = screen.getByRole('button');

  // do assertion - make sure component is doing what is expected
  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});

test('it calls onAddUser when the form is submitted', async () => {
  const mock = jest.fn();

  // Try to render my component
  render(<UserForm onAddUser={mock} />);

  // Find the two inputs
  const [nameInput, emailInput] = screen.getAllByRole('textbox');

  // Simulate typing in name
  userEvent.click(nameInput);
  userEvent.keyboard('jane');

  // Simulate typing in email
  userEvent.click(emailInput);
  userEvent.keyboard('jane@gmail.com');

  // Find the button
  const button = screen.getByRole('button');

  // Simulate clicking the button
  button.click();

  // Assertion to make sure 'onUserAdd' gets called with name/email
  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledWith({ name: 'jane', email: 'jane@gmail.com' });
});
