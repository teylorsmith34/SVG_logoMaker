const Circle = require("./circle");

describe("Circle", () => {
  describe("render", () => {
    it("should render a circle", () => {
      const shape = new Circle();
      shape.setColor("green");
      expect(shape.render()).toBe(
        '<circle cx="150" cy="100" r="80" fill="green" />'
      );
    });
  });
});
