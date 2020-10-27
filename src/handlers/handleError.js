const handleError = (err, res) => {
    const { statusCode, message } = err;
    res.status(statusCode || 400).json({
      status: "error",
      message
    });
  };

  module.exports = handleError;