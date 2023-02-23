const mongoose = require("mongoose");
const crypto = require("crypto");
const { v1: uuidv1 } = require("uuid");
const Schema = mongoose.Schema;

const opportunitySchema = new Schema(
  {
    posted_by_email: {
      type: String, //email of the patron who is posting this opportunity
      trim: true,
      required: true,
    },
    position: {
      type: String,
      trim: true,
      required: true,
    },
    about: {
      type: String,
      trim: true,
    },
    requirements: {
      type: String,
      trim: true,
    },
    duration: {
      type: String,
      trim: true,
    },
    number: {
      type: String,
      trim: true,
    },
    location: {
      type: String,
      trim: true,
    },
    link_of_document: {
      type: String,
      trim: true,
    },
    mode: {
      type: String,
      trim: true,
    },
    art: {
      type: String,
      trim: true,
    },
    language: {
      type: String,
      trim: true,
    },
    age: {
      type: Number,
    },
    type: {
      type: String,
      trim: true,
    },
    budget: {
      type: String,
      trim: true,
    },
    shortlisted: [
      {
        emailid: {
          type: String,
          trim: true,
        },
        _id: false,
      },
    ],
    hired: [
      {
        emailid: {
          type: String,
          trim: true,
        },
        _id: false,
      },
    ],
    rejected: [
      {
        emailid: {
          type: String,
          trim: true,
        },
        _id: false,
      },
    ],
    applied_by: [
      {
        emailid: {
          type: String,
          trim: true,
        },
        hired_status: {
          type: Number,
          default: 0,
        },
        _id: false,
      },
    ],
  },
  { timestamps: true }
);
module.exports = mongoose.model("Opportunity", opportunitySchema);
