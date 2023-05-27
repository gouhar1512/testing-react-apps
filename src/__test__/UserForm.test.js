import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import UserForm from "../components/UserForm";

test("it should show two inputs and a button", () => {
  // render the component
  render(<UserForm />);

  // manipulate the component and find an element in it
  const inputs = screen.getAllByRole("textbox");
  const button = screen.getByRole("button");

  // do assertion - make sure component is doing what is expected
  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});

test("it calls onAddUser when the form is submitted", async () => {
  const mock = jest.fn();

  // Try to render my component
  render(<UserForm onAddUser={mock} />);

  // Find the two inputs
  const nameInput = screen.getByRole("textbox", {
    name: /name/i,
  });
  const emailInput = screen.getByRole("textbox", {
    name: /email/i,
  });

  // Simulate typing in name
  user.click(nameInput);
  user.keyboard("jane");

  // Simulate typing in email
  user.click(emailInput);
  user.keyboard("jane@gmail.com");

  // Find the button
  const button = screen.getByRole("button");

  // Simulate clicking the button
  user.click(button);

  // Assertion to make sure 'onUserAdd' gets called with name/email
  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledWith({ name: "jane", email: "jane@gmail.com" });
});

test("it empties the two inputs when form is submitted", async () => {
  render(<UserForm onAddUser={() => {}} />);

  const nameInput = screen.getByRole("textbox", { name: /name/i });
  const emailInput = screen.getByRole("textbox", { name: /email/i });
  const button = screen.getByRole("button");

  user.click(nameInput);
  user.keyboard("jane");

  user.clear(emailInput);
  user.keyboard("jane@jane.com");

  user.click(button);

  expect(nameInput).toHaveValue("");
  expect(emailInput).toHaveValue("");
});
