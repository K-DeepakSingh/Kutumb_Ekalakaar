const express = require("express");
const passport = require("passport");
const cookieSession = require("cookie-session");
const passportSetup = require("./passport");
const app = express();

require("dotenv").config();

const port = 4000;

const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const opportunityRoutes = require("./routes/opportunity");

const mongoose = require("mongoose");
//Set up default mongoose connection

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

app.use(express.static("public"));

//app.use(bodyParser.urlencoded({extended:true}));

app.use(bodyParser.json());
app.use(cors());

mongoose.set("strictQuery", true);
//Database connection

mongoose.connect(process.env.MONGODB).then(() => {
  console.log("DB Connected");
});

//using middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", opportunityRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// const Opp = require("./models/opportunity");
// app.post("/dd", async (req, res) => {
//   const resd = await Opp.updateMany(
//     { posted_by_email: "aj1@gmail.com" },
//     {
//       $set: { mode: "Offline", art: "Dance", language: "Hindi", age: 34 },
//     }
//   );
//   res.json(resd);
// });

// app.use(
//   cookieSession({
//     name:"session",
//     keys:["cyberwolve"],
//     maxAge:24*60*60*100
//   })
// );

// app.use(passport.initialize());
// app.use(passport.session());

// app.use(
//   cors({
//     origin:"http://localhost:3000",
//     methods:"GET,POST,PUT,DELETE",
//     credentials:true,
//   })
// );
