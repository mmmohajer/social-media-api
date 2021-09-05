const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const helmet = require("helmet");
const morgan = require("morgan");
require("dotenv").config();

// app
const app = express();

// Database
let dbConnectionString;
if (process.env.NODE_ENV === "development") {
  dbConnectionString = process.env.DATABASE_LOCAL;
} else {
  dbConnectionString = process.env.DATABASE_CLOUD;
}
mongoose
  .connect(dbConnectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connected"));

// Middlewares
app.use(morgan("dev"));
app.use(express.json({ limit: "50mb" }));
app.use(helmet());
app.use(cookieParser());
if (process.env.NODE_ENV === "development") {
  app.use(cors({ origin: `${process.env.CLIENT_URL}` }));
}

// Import Routes
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");

// Endpoints
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);

// Port
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});
