const { DIJKSTRA } = require("../dist")

describe("DIJKSTRA Proj Init", () => {
  describe("DIJKSTRA", () => {
    it("Should print Hello World!", () => {
      expect(DIJKSTRA.greet("lib")).toEqual("HellolibWorld!");
    });
  });
});