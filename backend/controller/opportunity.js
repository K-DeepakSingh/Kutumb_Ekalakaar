const { default: mongoose } = require("mongoose");
const Opportunity = require("../models/opportunity");
const User = require("../models/user");
//middleware for getting all record by email of patron
exports.getEmailId = (req, res, next, id) => {
  Opportunity.find({ posted_by_email: id }).exec((err, user) => {
    // console.log(user);
    if (err || !user) {
      return res.status(400).json({
        error: "No user was found in DB BY ID",
      });
    }

    req.profile = user;
    next();
  });
};

//all opportunities posted by the patron
exports.getAllOpportunity = (req, res) => {
  return res.json(req.profile);
};

//middlware for getting opportunity by opportunity id
exports.getOpportunityId = (req, res, next, id) => {
  Opportunity.findById(id).exec((err, result) => {
    if (err || !result) {
      return res.status(404).json({
        status: "fail",
        message: "Opportunity not found!",
      });
    }

    req.profile = result;
    next();
  });
};

//create opportunity by patron
exports.createOpportunity = (req, res) => {
  const opportunity = new Opportunity(req.body);

  opportunity.save((err, result) => {
    if (err) {
      console.log(err);
      return res.status(400).json({
        err: " Not able to save user in DB",
      });
    }

    res.json({
      posted_by_email: result.posted_by_email,
      id: result._id,
    });
  });
};

exports.updateOpportunity = (req, res) => {
  console.log(req.body);
  Opportunity.findByIdAndUpdate({ _id: req.profile._id }, { $set: req.body }, { new: true, useFindAndModify: false }, (err, result) => {
    if (err) {
      return res.status(400).json({
        error: "You are not authorized to update this.",
      });
    }
    result.salt = undefined;
    result.encry_password = undefined;
    res.json(result);
  });
};

exports.removeOpportunity = async (req, res) => {
  const opportunityId = req.params.opportunityId;

  const { emailid } = req.body;

  const user = await User.findOne({ email: emailid });

  if (user === null) {
    return res.status(404).json({
      status: "fail",
      message: "User not found with this emailid!",
    });
  }

  const opportuity = await Opportunity.findByIdAndUpdate(
    req.profile._id,
    {
      $pull: { applied_by: { emailid } },
    },
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(200).json({
    status: "success",
    data: opportuity,
  });
};

exports.applyOpportunity = async (req, res) => {
  const opportunityId = req.params.opportunityId;

  const { emailid } = req.body;

  if (!emailid) {
    return res.status(400).json({
      status: "fail",
      message: "Please provide an emailid!",
    });
  }

  const user = await User.findOne({ email: emailid });

  if (user === null) {
    return res.status(404).json({
      status: "fail",
      message: "User not found with this emailid!",
    });
  }

  const opp = req.profile;

  for (app in opp.applied_by) {
    if (opp.applied_by[app].emailid === emailid) {
      return res.status(400).json({
        status: "fail",
        message: "You have already applied!",
      });
    }
  }

  opp.applied_by.push({ emailid });

  await opp.save({ validateBeforeSave: false });

  res.status(200).json({
    status: "success",
    data: opp,
  });
};

//added by Gokul Suthar
exports.getAllOpportunities = async (req, res) => {
  const opportunities = await Opportunity.find({}).populate({ path: "shortlisted" });
  // console.log(opportunities === []);
  if (opportunities === []) {
    return res.status(404).json({
      status: "success",
      message: "There is no user found on the server!",
    });
  }

  res.status(200).json({
    status: "success",
    data: opportunities,
  });
};

exports.shortListAnArtist = async (req, res) => {
  const opportunityId = req.params.opportunityId;

  const emailid = req.params.emailId;

  if (!opportunityId || !emailid) {
    return res.status(404).json({
      status: "fail",
      message: "Please provide an opportunityId and emailId in the params!",
    });
  }

  const user = await User.findOne({ email: emailid });

  if (user === null) {
    return res.status(404).json({
      status: "fail",
      message: "User not found with this emailid!",
    });
  }

  const opportuity = await Opportunity.findById(opportunityId);

  let haveApplied = false;
  for (app in opportuity.applied_by) {
    if (opportuity.applied_by[app].emailid !== emailid) {
      haveApplied = false;
    }
    haveApplied = true;
    break;
  }

  // console.log(haveApplied);
  if (!haveApplied) {
    return res.status(400).json({
      status: "fail",
      message: "You have not applied yet!",
    });
  }

  let isShortlisted = false;

  for (app in opportuity.shortlisted) {
    if (opportuity.shortlisted[app].emailid !== emailid) {
      isShortlisted = false;
    }
    isShortlisted = true;
    break;
  }

  // console.log(isShortlisted);

  if (isShortlisted) {
    return res.status(400).json({
      status: "fail",
      message: "You are already shortlisted!",
    });
  }

  let isHired = false;

  for (app in opportuity.hired) {
    if (opportuity.hired[app].emailid !== emailid) {
      isHired = false;
    }
    isHired = true;
    break;
  }

  // console.log(isHired);

  if (isHired) {
    return res.status(400).json({
      status: "fail",
      message: "You are already hired!",
    });
  }

  opportuity.shortlisted.push({ emailid });

  await opportuity.save({ validateBeforeSave: false });

  res.status(200).json({
    status: "success",
    data: opportuity,
  });
};

exports.hireListAnArtist = async (req, res) => {
  const opportunityId = req.params.opportunityId;

  const emailid = req.params.emailId;

  if (!opportunityId || !emailid) {
    return res.status(404).json({
      status: "fail",
      message: "Please provide an opportunityId and emailId in the params!",
    });
  }

  const user = await User.findOne({ email: emailid });

  if (user === null) {
    return res.status(404).json({
      status: "fail",
      message: "User not found with this emailid!",
    });
  }

  let opportuity = await Opportunity.findById(opportunityId);

  let isShortlisted = false;

  for (app in opportuity.shortlisted) {
    if (opportuity.shortlisted[app].emailid !== emailid) {
      isShortlisted = false;
    }
    isShortlisted = true;
    break;
  }

  let hireadAlready = false;

  for (app in opportuity.hired) {
    if (opportuity.hired[app].emailid !== emailid) {
      hireadAlready = false;
    }
    hireadAlready = true;
    break;
  }

  // console.log(isShortlisted);

  if (hireadAlready && !isShortlisted) {
    return res.status(400).json({
      status: "fail",
      message: "You are already hired!",
    });
  }

  let haveApplied = false;
  for (app in opportuity.applied_by) {
    if (opportuity.applied_by[app].emailid === emailid) {
      haveApplied = true;
      break;
    }
    haveApplied = false;
  }

  if (!haveApplied) {
    // console.log(haveApplied);
    return res.status(400).json({
      status: "fail",
      message: "You have not applied yet!",
    });
  }

  opportuity = await Opportunity.findByIdAndUpdate(
    opportuity._id,
    {
      $pull: { shortlisted: { emailid } },
      $push: { hired: { emailid } },
      $set: { applied_by: { emailid, hired_status: 1 } },
    },
    { new: true, runValidators: true }
  );

  res.status(200).json({
    status: "success",
    data: opportuity,
  });
};

// reject an artist
exports.rejected = async (req, res) => {
  const opportunityId = req.params.opportunityId;

  const emailid = req.params.emailId;

  if (!opportunityId || !emailid) {
    return res.status(404).json({
      status: "fail",
      message: "Please provide an opportunityId and emailId in the params!",
    });
  }

  const user = await User.findOne({ email: emailid });

  if (user === null) {
    return res.status(404).json({
      status: "fail",
      message: "User not found with this emailid!",
    });
  }

  let opportuity = await Opportunity.findById(opportunityId);

  let haveApplied = false;
  let isHired = false;
  for (app in opportuity.applied_by) {
    if (opportuity.applied_by[app].emailid === emailid) {
      haveApplied = true;
      if (opportuity.applied_by[app].hired_status === 1) {
        isHired = true;
        break;
      }
      break;
    }
    haveApplied = false;
  }

  let alreadyRejected = false;
  for (app in opportuity.rejected) {
    if (opportuity.rejected[app].emailid === emailid) {
      alreadyRejected = true;
      break;
    }
    alreadyRejected = false;
  }

  if (alreadyRejected) {
    return res.status(400).json({
      status: "fail",
      message: "You are alreay rejected!",
    });
  }
  // console.log(isHired);

  if (isHired) {
    return res.status(400).json({
      status: "fail",
      message: "You are alreay hired!",
    });
  }

  if (!haveApplied) {
    // console.log(haveApplied);
    return res.status(400).json({
      status: "fail",
      message: "You have not applied yet!",
    });
  }

  opportuity = await Opportunity.findByIdAndUpdate(
    opportunityId,
    {
      $pull: { applied_by: { emailid }, shortlisted: { emailid } },
      $push: { rejected: { emailid } },
    },
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(200).json({
    status: "success",
    data: opportuity,
  });
};

exports.findAnOpportunity = async (req, res) => {
  const docs = await Opportunity.find(req.query);

  return res.status(200).json({
    status: "success",
    result: docs.length,
    data: {
      data: docs,
    },
  });
};

exports.getOpportunityById = async (req, res) => {
  res.status(200).json({
    status: "success",
    data: req.profile,
  });
};

exports.deleteOpportunityById = async (req, res) => {
  await Opportunity.findByIdAndDelete(req.profile._id);

  res.status(204).json({
    status: "success",
    data: req.profile,
  });
};
