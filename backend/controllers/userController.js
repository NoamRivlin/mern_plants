const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

// desc authenticate a user
// route POST /api/user/login
//access public
const loginUser = asyncHandler(async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(201).json({
      // user,
      id: user.id, // it doenst matter if its _id or id. so weird
      username: user.username,
      token: generateToken(user.id), //try with just user.id
    });
  } else {
    res.status(400);
    throw new Error('invalid credentials');
  }

  res.json({ messgage: 'Login' });
});
// desc register a User
// route POST /api/user
//access public
const registerUser = asyncHandler(async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    throw new Error('add all fields');
  }
  //check if user already exists
  const userExists = await User.findOne({ username });
  if (userExists) {
    res.status(400);
    throw new Error('user already exits');
  }
  // hash password
  const salt = await bcrypt.genSalt(2);
  const hashedPass = await bcrypt.hash(password, salt);
  const user = await User.create({
    username,
    password: hashedPass,
  });
  if (user) {
    res.status(201).json({
      // user,
      _id: user.id,
      username: user.username,
      token: generateToken(user._id), //try with just user.id
    });
  } else {
    res.status(400);
    throw new Error('invalid user data');
  }
});

// desc get  User
// route GET  /api/user/me
//access public
const getMe = asyncHandler(async (req, res) => {
  // res.json({ messgage: 'your data' });
  const { id, username } = await User.findById(req.user.id);
  res.status(200).json({
    id: id,
    username,
  });
});

//generate JWT token *doesnt work without curlybrackets, why? id is already a string
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

module.exports = {
  registerUser,
  loginUser,
  getMe,
};
