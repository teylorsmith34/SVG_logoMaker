const Square = require("./square");

describe("Square", () => {
  describe("render", () => {
    it("should render a square", () => {
      const shape = new Square();
      shape.setColor("red");
      expect(shape.render()).toBe(
        '<rect x="0" y="0" width="100" height="100" fill="red" />'
      );
    });
  });
});
