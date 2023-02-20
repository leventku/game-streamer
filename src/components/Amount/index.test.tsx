import { render } from "@testing-library/react";
import { Amount } from ".";

test("should render as expected", () => {
  const { asFragment } = render(<Amount value={510.55} currency="GBP" />);

  expect(asFragment()).toMatchInlineSnapshot(`
<DocumentFragment>
  <span
    class="amount"
  >
    £510.55
  </span>
</DocumentFragment>
`);
});
