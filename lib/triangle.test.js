const Triangle = require("./triangle");

describe("Triangle", () => {
  describe("render", () => {
    it("should render a triangle", () => {
      const shape = new Triangle();
      shape.setColor("blue");
      expect(shape.render()).toBe(
        '<polygon points="0,0 100,0 50,100" fill="blue" />'
      );
    });
  });
});
