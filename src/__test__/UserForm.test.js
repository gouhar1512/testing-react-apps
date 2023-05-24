import {render, screen} from "@testing-library/react";
import {user} from "@testing-library/user-event";
import UserForm from "../components/UserForm";

test('it should show two inputs and a button', () => {

  // render the component
  render(<UserForm/>);

  // manipulate the component and find an element in it
  const inputs = screen.getAllByRole("textbox");
  const button = screen.getByRole("button");

  // do assertion - make sure component is doing what is expected
  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument()

});