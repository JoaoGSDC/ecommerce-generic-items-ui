import { render, screen } from "@testing-library/react";
import Select from ".";

describe("Cart Component", () => {
  test("should display the title in the Select component", () => {
    const data: any[] = [];
    const isNotSortBy = false;

    render(<Select data={data} isNotSortBy={isNotSortBy} />);

    const titleInComponent = screen.getByText("SORT BY");
    expect(titleInComponent).toBeInTheDocument();
  });
});
