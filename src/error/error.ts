class ErrorBase extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, this.constructor);
    } else {
      this.stack = new Error(message).stack;
    }
  }
}

export class CreateParamTypeError extends ErrorBase {
  constructor(func, param, type) {
    super(`${func} Create Function ${param} Paramters ${type} Type Error`);
  }
}

export class CreateWhenError extends ErrorBase {
  constructor(func, error_message) {
    super(`${func} Create Function Error: ${error_message}`);
  }
}

export class ReadParamTypeError extends ErrorBase {
  constructor(func, param, type) {
    super(`${func} Read Function ${param} Paramters ${type} Type Error`);
  }
}

export class ReadWhenError extends ErrorBase {
  constructor(func, error_message) {
    super(`${func} Read Function Error: ${error_message}`);
  }
}

export class UpdateParamTypeError extends ErrorBase {
  constructor(func, param, type) {
    super(`${func} Update Function ${param} Paramters ${type} Type Error`);
  }
}

export class UpdateWhenError extends ErrorBase {
  constructor(func, error_message) {
    super(`${func} Update Function Error: ${error_message}`);
  }
}

export class DeleteParamTypeError extends ErrorBase {
  constructor(func, param, type) {
    super(`${func} Delete Function ${param} Paramters ${type} Type Error`);
  }
}

export class DeleteWhenError extends ErrorBase {
  constructor(func, error_message) {
    super(`${func} Delete Function Error: ${error_message}`);
  }
}

export class InstanceInitError extends ErrorBase {
  constructor(func, error_message) {
    super(`${func} Init Error: ${error_message}`);
  }
}
export class InstanceExecuteError extends ErrorBase {
  constructor(func, error_message) {
    super(`${func} Execution Error: ${error_message}`);
  }
}
