const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

// Cofirm it is an admin
module.exports.isAdmin = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      return res.status(401).send({
        statuscode: 401,
        status: "error",
        thetoken: `${req.headers.authorization}`,
        message: "No token provided",
      });
    }
    const token = await req.headers.authorization.split(" ")[1];
    if (token === undefined) {
      return res.status(404).json({
        status: "error",
        statusCode: 404,
        message: "Token not found in the header",
      });
    }

    const decodedToken = await jwt.verify(token, process.env.JWT_SECRET);

    // confirm that the token is valid
    if (!decodedToken) {
      return res.status(401).json({
        status: "error",
        statusCode: 401,
        message: "Token is not valid",
      });
    }

    const adminId = decodedToken.userId;

    // Check if Admin Id Exists in the admin database
    const admin = await User.findById(adminId);

    console.log(admin);

    if (admin.role !== "admin") {
      return res.status(404).json({
        status: "error",
        statusCode: 404,
        message:
          "Unauthorized Request! You are not allowed to make request to this endpoint",
      });
    } else {
      req.admin = admin;
      next();
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "error",
      statusCode: 500,
      message: "Internal Server Error",
    });
  }
};

// Cofirm it is an admin
module.exports.isHOD = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      return res.status(401).send({
        statuscode: 401,
        status: "error",
        thetoken: `${req.headers.authorization}`,
        message: "No token provided",
      });
    }
    const token = await req.headers.authorization.split(" ")[1];
    if (token === undefined) {
      return res.status(404).json({
        status: "error",
        statusCode: 404,
        message: "Token not found in the header",
      });
    }

    const decodedToken = await jwt.verify(token, process.env.JWT_SECRET);

    // confirm that the token is valid
    if (!decodedToken) {
      return res.status(401).json({
        status: "error",
        statusCode: 401,
        message: "Token is not valid",
      });
    }

    const adminId = decodedToken.userId;

    // Check if Admin Id Exists in the admin database
    const admin = await User.findById(adminId);

    console.log(admin);

    if (admin.role !== "HOD") {
      return res.status(404).json({
        status: "error",
        statusCode: 404,
        message:
          "Unauthorized Request! You are not allowed to make request to this endpoint",
      });
    } else {
      req.admin = admin;
      next();
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "error",
      statusCode: 500,
      message: "Internal Server Error",
    });
  }
};
