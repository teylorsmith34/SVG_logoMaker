const Triangle = require("./triangle");

describe("Triangle", () => {
  describe("render", () => {
    it("should render a triangle", () => {
      const shape = new Triangle();
      shape.setColor("blue");
      expect(shape.render()).toBe(
        '<polygon points="150, 18 275, 182 25,182" fill="blue" />'
      );
    });
  });
});
