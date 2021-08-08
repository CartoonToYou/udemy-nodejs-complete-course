const User = require("../models/user");

exports.getStatus = (req, res, next) => {
  User.findById(req.userId)
    .then((user) => {
      if (!user) {
        const error = new Error("Could not find user.");
        error.statusCode = 404;
        throw error;
      }
      res.status(200).json({
        message: "Staus fetched",
      });
    })
    .catch((err) => {
      if (err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.editStatus = (req, res, next) => {
  const {
    body: { status },
    params: { userId },
  } = req;
  User.findById(req.userId)
    .then((user) => {
      if (!user) {
        const error = new Error("Could not find user.");
        error.statusCode = 404;
        throw error;
      }
      if (user._id.toString() !== userId.toString()) {
        const error = new Error("Not authorized!");
        error.statusCode = 401;
        throw error;
      }
      user.status = status;
      return user.save();
    })
    .then((result) => {
      res.status(201).json({
        message: "Status was updated successfully.",
        user: result,
      });
    })
    .catch((err) => {
      if (err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};
