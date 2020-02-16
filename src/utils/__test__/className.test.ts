import { getClassNames } from "../className";


describe("className ", () => {
  it("Check if className is appending classes right", async () => {
    const data = getClassNames("class-A class-B", "class-C");
    expect(data).toEqual("class-A class-B class-C");
  });
});
