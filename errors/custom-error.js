class CustomAPIError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

const createCustomErrpr = (msg, statusCode) => {
  return new CustomAPIError(msg, statusCode);
};

module.exports = { createCustomErrpr, CustomAPIError };
