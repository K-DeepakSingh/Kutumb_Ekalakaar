const User = require("../models/user");
const Otp = require("../models/otp");
const UserQuery = require("../models/userQuery");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
require("../package");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
  },
});

exports.upload = multer({ storage: storage });

exports.getUserById = (req, res, next, id) => {
  req.profile = 0;
  // console.log(id);
  User.findById(id).exec((err, user) => {
    if (err || !user) {
      // console.log(user);
      return res.status(400).json({
        error: "No user was found in DB BY ID",
      });
    }
    // console.log(user);

    req.profile = user;
    next();
  });
};

exports.getUserByEmail = (req, res, next, id) => {
  User.find({ email: id, role: 0, isRegistered: true }).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "No user was found in DB BY ID",
      });
    }

    req.profile = user;
    next();
  });
};

exports.getUser = async (req, res) => {
  req.profile.salt = undefined;
  req.profile.encry_password = undefined;
  req.profile.createdAt = undefined;
  req.profile.updatedAt = undefined;
  req.profile.patron = undefined;
  return res.json(req.profile);
};

exports.getByEmail = async (req, res) => {
  req.profile[0].salt = undefined;
  req.profile[0].encry_password = undefined;
  req.profile[0].createdAt = undefined;
  req.profile[0].updatedAt = undefined;
  req.profile[0].patron = undefined;
  req.profile[0].isRegistered = false;
};
//update artist user
exports.updateUser = (req, res) => {
  console.log(req.body);
  User.findByIdAndUpdate({ _id: req.profile._id }, { $set: req.body }, { new: true, runValidators : true } , (err, user) => {
    if (err) {
      return res.status(400).json({
        error: "You are not authorized to update this.",
      });
    }
    user.salt = undefined;
    user.encry_password = undefined;
    res.json(user);
  });
};

//Controller for artist registration
exports.registerUser = (req, res) => {
  let obj;
  if (req.file) {
    obj = {
      photo: {
        data: fs.readFileSync(require.resolve("../uploads/" + req.file.filename), { encoding: "utf8" }),
        contentType: "image/jpg",
      },
    };
    req.body.photo = obj.photo;
  }

  User.findByIdAndUpdate({ _id: req.profile._id }, { artist: req.body, isRegistered: true }, { new: true, useFindAndModify: true }, (err, user) => {
    if (err) {
      // console.log("eeee", err);
      return res.status(400).json({
        error: "You are not authorized to update this.",
      });
    }
    if (req.file) {
      user.artist.photo = obj.photo;
    }

    user.salt = undefined;
    user.encry_password = undefined;
    user.createdAt = undefined;
    user.updatedAt = undefined;

    res.json(user);
  });
};

//controller for updating patron
exports.updatePatron = (req, res) => {
  User.findByIdAndUpdate({ _id: req.profile._id }, { $set: req.body }, { new: true, useFindAndModify: true }, (err, user) => {
    if (err) {
      return res.status(400).json({
        error: "You are not authorized to update this.",
      });
    }
    user.salt = undefined;
    user.password = undefined;
    res.json(user);
  });
};

//controller for registering patron
exports.registerPatron = (req, res) => {
  // let filter={patron:req.body}
  User.findByIdAndUpdate({ _id: req.profile._id }, { patron: req.body, isRegistered: true }, { new: true, useFindAndModify: true }, (err, user) => {
    if (err) {
      return res.status(400).json({
        error: "You are not authorized to update this.",
      });
    }
    user.salt = undefined;
    user.encry_password = undefined;
    user.createdAt = undefined;
    user.updatedAt = undefined;
    res.json(user);
  });
};

//get patron details
exports.getPatron = (req, res) => {
  req.profile.salt = undefined;
  req.profile.encry_password = undefined;
  req.profile.createdAt = undefined;
  req.profile.updatedAt = undefined;

  return res.json(req.profile);
};

exports.getUserByFilter = (req, res) => {
  console.log(req.body);
  User.find(req.body).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "No Record found By Filter",
      });
    }

    return res.json(user);
  });
};

//added by Gokul Suthar
exports.getAllUsers = async (req, res) => {
  const users = await User.find({});

  if (users === []) {
    return res.status(404).json({
      status: "success",
      message: "There is no user found on the server!",
    });
  }

  res.status(200).json({
    status: "success",
    data: users,
  });
};

exports.getUserByEmail = async (req, res) => {
  const email = req.body.email;

  if (!email) {
    return res.status(400).json({
      status: "fail",
      message: "Please provide an email address!",
    });
  }

  const user = await User.findOne({ email });

  if (user === {}) {
    return res.status(404).json({
      status: "fail",
      message: "User not found with this email address!",
    });
  }

  res.status(200).json({
    status: "success",
    data: user,
  });
};

exports.forgotPassword = async (req, res) => {
  const email = req.body.email;

  if (!email) {
    return res.status(200).json({
      status: "fail",
      message: "Please provide an email address!",
    });
  }

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(200).json({
      status: "fail",
      message: "There is no user found with this email address!",
    });
  }

  // const otpObject = {
  //   otp: Math.floor(1000 + Math.random() * 9000),
  //   expirationTime: new Date().getTime() + 10 * 60000,
  //   userId: user._id,
  // };

  // const otp = await Otp.create(otpObject);

  // // this generated otp will be send to the user via email or text message

  // res.status(200).json({
  //   status: "success",
  //   data: {
  //     otp: otp.otp,
  //   },
  // });

  //for testing

  const otpObject = {
    otp: 6645,
    expirationTime: new Date().getTime() + 10 * 60000,
    userId: user._id,
  };

  const otp = await Otp.create(otpObject);

  res.status(200).json({
    status: "success",
    data: {
      otp: otp.otp,
    },
  });
};

exports.resetPassword = async (req, res) => {
  const { otp, email, newPassword, confirmNewPassword } = req.body;

  if (!otp || !email || !newPassword) {
    return res.status(400).json({
      status: "fail",
      message: "Please provide an OTP, email address and newPassword!",
    });
  }

  const code = await Otp.findOne({ otp });

  if (!code) {
    return res.status(400).json({
      status: "fail",
      message: "Invalid OTP or has been expired!",
    });
  }

  const user = await User.findOne({
    email,
    id: code.userId,
  });

  if (!user) {
    return res.status(404).json({
      status: "fail",
      message: "User not found!",
    });
  }

  if (newPassword !== confirmNewPassword) {
    return res.status(404).json({
      status: "fail",
      message: "newPassword and confirmNewPassword does not match!",
    });
  }

  user.password = req.body.newPassword;

  await user.save({ validateBeforeSave: false });

  await Otp.findOneAndDelete({ otp, userId: user.id });

  res.status(200).json({
    status: "success",
    data: {
      user,
    },
  });
};

exports.userQuery = async (req, res) => {
  // const
  const { name, contactNumber, emailId, location, query } = req.body;

  if (!name || !contactNumber || !emailId || !location || !query) {
    return res.status(200).json({
      status: "success",
      message: "Please provide name, contactNumber, emailId, location, query",
    });
  }

  await UserQuery.create(req.body);

  res.status(201).json({
    status: "success",
    message: "Query posted!",
  });
};

exports.getAllQueries = async (req, res) => {
  const queries = await UserQuery.find({});

  res.status(200).json({
    status: "success",
    totalQueries: queries.length,
    data: queries,
  });
};
