const express = require("express");
const app = express();
const port = 5000;
const connectDb = require("./db/dbConnect");
const user = require("./db/user");
const User = require("./db/user");
connectDb();

// middleware
app.use(express.json());

// regis
app.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log(req.body);
    const user = new User({ username, password });
    await user.save();
    res.status(201).json({ message: "Registration Successfull" });
  } catch (error) {
    response.status(500).json({ error: "FAILED" });
  }
});

//login
app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ error: "Invalid Username or Password" });
    }
    if (user.password !== password) {
      return res.status(401).json({ error: "Invalid Username or Password" });
    }

    res.status(200).json({ message: "Login Successful" });
  } catch (error) {
    res.status(500).json({ error: "Login Failed" });
  }
});

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(port, () => {
  console.log("Server is running in port 5000");
});
