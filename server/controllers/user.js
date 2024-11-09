const User = require("../models/user");

async function handleUserSignUp(req, res) {
  try {
    const { name, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res
        .status(409)
        .json({ message: "User already exists, please login", success: false });
    }

    let newUser = await User.create({ name, email, password });
    //removing/deleting password so that it wont goes in the response to the client
    newUser = newUser.toObject();
    delete newUser.password;

    res.status(201).json({ newUser, success: true });
  } catch (err) {
    res.status(500).json({ message: "Internal server error", success: false });
  }
}

async function handleUserLogin(req, res) {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(404)
      .json({ message: "all fields required", success: false });
  }
  try {
    //we dont want to sent password in res so, using select here
    const user = await User.findOne(req.body).select("-password");

    const errorMsg = "Auth failed email or password wrong";
    console.log(user);

    if (!user) {
      return res.status(404).json({ message: errorMsg, success: false });
    }
    res.status(201).json({ message: user, success: true });
    // res.send(user);
  } catch (err) {
    res.status(500).json({ message: "Internal server error", success: false });
  }
}

module.exports = {
  handleUserSignUp,
  handleUserLogin,
};
