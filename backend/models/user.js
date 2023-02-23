const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const { v1: uuidv1 } = require("uuid");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      maxlength: 32,
      trim: true,
    },
    middlename: {
      type: String,
      trim: true,
    },
    lastname: {
      type: String,
      trim: true,
    },
    phoneno: {
      type: Number,
      max: 9999999999,
      min: 1000000000,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    patron: {
      name_of_company: {
        type: String,
        trim: true,
        default: "",
      },
      pname: {
        type: String,
        trim: true,
        default: "",
      },
      gender: {
        type: String,
        trim: true,
        default: "",
      },
      location: {
        type: String,
        trim: true,
        default: "",
      },
      pno: {
        type: Number,
        maxlength: 10,
      },
      emailid: {
        type: String,
        trim: true,
        default: "",
      },
      youtube_link: {
        type: String,
        trim: true,
        default: "",
      },
      instagram_link: {
        type: String,
        trim: true,
        default: "",
      },
      facebook_link: {
        type: String,
        trim: true,
        default: "",
      },
      nature_of_offering: {
        type: String,
        trim: true,
        default: "",
      },
      selector: {
        type: String,
        trim: true,
        default: "",
      },
      profession: {
        type: String,
        trim: true,
        default: "",
      },
      type_of_art: {
        type: String,
        trim: true,
        default: "",
      },
      category: {
        type: String,
        trim: true,
        default: "",
      },
    },
    artist: {
      fname: {
        type: String,
        trim: true,
        default: "",
      },
      lname: {
        type: String,
        trim: true,
        default: "",
      },
      pno: {
        type: Number,
        maxlength: 10,
        default: 0,
      },
      emailid: {
        type: String,
        trim: true,
        default: 0,
      },
      age: {
        type: Number,
        default: 0,
      },
      gender: {
        type: String,
        trim: true,
        default: "",
      },
      caste: {
        type: "String",
        trim: true,
        default: "",
      },
      religion: {
        type: String,
        trim: true,
        default: "",
      },
      height: {
        type: Number,
        default: 0,
      },
      weight: {
        type: Number,
        default: 0,
      },
      language: {
        type: String,
        default: "",
        trim: true,
      },
      education: {
        type: String,
        trim: true,
        default: "",
      },
      skills: [String],
      category: {
        type: String,
        trim: true,
        default: "",
      },
      experince: {
        type: String,
        trim: true,
        default: "",
      },
      url: {
        type: String,
        default: "",
      },
      photo: {
        data: Buffer,
        contentType: String,
      },
    },
    role: {
      type: Number,
      default: 0,
    },
    isRegistered: {
      type: Boolean,
      default: false,
    },
    //role 0 for artists
    //role 1 for patron
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

userSchema.methods.correctPassword = async function (candidatePass, userPass) {
  return await bcrypt.compare(candidatePass, userPass);
};

module.exports = mongoose.model("User", userSchema);
