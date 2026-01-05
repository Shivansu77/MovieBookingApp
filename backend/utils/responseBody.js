const sendSuccessResponse = (res, statusCode, message, data = null) => {
  const response = {
    success: true,
    statusCode,
    message,
  };
  if (data !== null) {
    response.data = data;
  }
  return res.status(statusCode).json(response);
};

const sendErrorResponse = (res, statusCode, error, details = null) => {
  const response = {
    success: false,
    statusCode,
    error,
  };
  if (details !== null) {
    response.details = details;
  }
  return res.status(statusCode).json(response);
};

const successResponse = (statusCode, message, data = null) => {
  const response = {
    success: true,
    statusCode,
    message,
  };
  if (data !== null) {
    response.data = data;
  }
  return response;
};

const errorResponse = (statusCode, error, details = null) => {
  const response = {
    success: false,
    statusCode,
    error,
  };
  if (details !== null) {
    response.details = details;
  }
  return response;
};

module.exports = {
  sendSuccessResponse,
  sendErrorResponse,
  successResponse,
  errorResponse,
};
