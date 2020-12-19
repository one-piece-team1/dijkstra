const { HaversineFactory } = require("../dist/index");

describe("Haversine Implementation", () => {
  describe("Haversine Distance Calculation", () => {
    test("Should return 1206 kilometer bewtween two coordinates", () => {
      let dist = HaversineFactory.calc([28.7515963, 61.5322204], [22.1455439, 51.9971208], true);
      dist = Math.round(dist);
      expect(dist).toEqual(1206);
    });
  });
});