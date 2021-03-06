const expresss = require("express");
const app = expresss();
const userRoutes = require("./routes/userRoutes");
const meetingRoutes = require("./routes/meetingRoutes");
const db = require("./config/db");

//using dotenv
const dotenv = require("dotenv");
dotenv.config();

//conncet to mongodb
db.connectDB();

//using for json body parser
app.use(expresss.json());

//Routes

app.get("/", (req, res) => {
  // res.send("<h1>Skrate Backend Intern Assignment 21-22</h1>");
  res.sendFile(__dirname + "/task.txt");
});

app.use("/users", userRoutes);
app.use("/meetings", meetingRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("server is running on port " + PORT);
});
