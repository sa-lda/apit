class BaseResponseObject {
  constructor(success, message, data = null) {
    this.success = success;
    this.message = message;
  }
}

exports.SuccessResponseObject = class SuccessResponseObject extends BaseResponseObject {
  constructor(message) {
    super(true, message);
  }
};

exports.ErrorResponseObject = class ErrorResponseObject extends BaseResponseObject {
  constructor(message) {
    super(false, message);
  }
};
