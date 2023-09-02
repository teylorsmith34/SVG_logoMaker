const Square = require("./square");

describe("Square", () => {
  describe("render", () => {
    it("should render a square", () => {
      const shape = new Square();
      shape.setColor("red");
      expect(shape.render()).toBe(
        '<rect x="70" y="20" width="160" height="160" fill="red" />'
      );
    });
  });
});
