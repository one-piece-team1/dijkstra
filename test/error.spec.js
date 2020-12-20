const { CreateParamTypeError, CreateWhenError, ReadParamTypeError, ReadWhenError, UpdateParamTypeError, UpdateWhenError, DeleteParamTypeError, DeleteWhenError, InstanceInitError, InstanceExecuteError } = require("../dist/index");

describe("# Error Handler ", () => {
  describe("# CreateParamTypeError ", () => {
    test("Should have CreateParamTypeError thrown Error Message", () => {
      expect(() => {
        throw new CreateParamTypeError("Test", "userid", "string");
      }).toThrow("Test Create Function userid Paramters string Type Error");
    });
  });

  describe("# CreateWhenError ", () => {
    test("Should have CreateWhenError thrown Error Message", () => {
      expect(() => {
        throw new CreateWhenError("Test", "test error");
      }).toThrow("Test Create Function Error: test error");
    });
  });

  describe("# ReadParamTypeError ", () => {
    test("Should have ReadParamTypeError thrown Error Message", () => {
      expect(() => {
        throw new ReadParamTypeError("Test", "userid", "string");
      }).toThrow("Test Read Function userid Paramters string Type Error");
    });
  });

  describe("# ReadWhenError ", () => {
    test("Should have ReadWhenError thrown Error Message", () => {
      expect(() => {
        throw new ReadWhenError("Test", "test error");
      }).toThrow("Test Read Function Error: test error");
    });
  });

  describe("# UpdateWhenError ", () => {
    test("Should have UpdateWhenError thrown Error Message", () => {
      expect(() => {
        throw new UpdateWhenError("Test", "test error");
      }).toThrow("Test Update Function Error: test error");
    });
  });

  describe("# UpdateParamTypeError ", () => {
    test("Should have UpdateParamTypeError thrown Error Message", () => {
      expect(() => {
        throw new UpdateParamTypeError("Test", "userid", "string");
      }).toThrow("Test Update Function userid Paramters string Type Error");
    });
  });

  describe("# DeleteWhenError ", () => {
    test("Should have DeleteWhenError thrown Error Message", () => {
      expect(() => {
        throw new DeleteWhenError("Test", "test error");
      }).toThrow("Test Delete Function Error: test error");
    });
  });

  describe("# DeleteParamTypeError ", () => {
    test("Should have DeleteParamTypeError thrown Error Message", () => {
      expect(() => {
        throw new DeleteParamTypeError("Test", "userid", "string");
      }).toThrow("Test Delete Function userid Paramters string Type Error");
    });
  });

  describe("# InstanceInitError ", () => {
    test("Should have InstanceInitError thrown Error Message", () => {
      expect(() => {
        throw new InstanceInitError("Test", "test error");
      }).toThrow("Test Init Error: test error");
    });
  });

  describe("# InstanceExecuteError ", () => {
    test("Should have InstanceExecuteError thrown Error Message", () => {
      expect(() => {
        throw new InstanceExecuteError("Test", "test error");
      }).toThrow("Test Execution Error: test error");
    });
  });
});
