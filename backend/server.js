require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workout.js");
mongoose.set("strictQuery", false);
// expres app
const app = express();

//middleware
//searches for data in body of request and pass it to request object
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/workout", workoutRoutes);

//connect to DB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(process.env.PORT, function () {
      console.log(`listening on port port 2022`);
    });
  })
  .catch((error) => console.log(error));

// listen to requests on port 4000:
