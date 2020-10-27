const handleSuccess = (data,res) => {
    return res.json({
        status: "success",
        data
      }).status(200);
  };

  module.exports = handleSuccess;