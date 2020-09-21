const User = require('./auth.dao');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const SECRET_KEY = 'Secret78945612';

exports.createUser = (req, res, next) => {
  const newUser = {
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password),
    first_name: req.body.first_name,
    last_name:req.body.last_name,
    user_type:req.body.user_type
  }

  User.create(newUser, (err, user) => {
    if (err && err.code === 11000) return res.status(409).send('Email already exists');
    if (err) return res.status(500).send('Server error');
    const expiresIn = 24 * 60 * 60;
    const accessToken = jwt.sign({ id: user.id },
      SECRET_KEY, {
        expiresIn: expiresIn
      });
    const dataUser = {
      _id:user._id,
      first_name:user.first_name,
      last_name:user.last_name,
      user_type:user.user_type,
      email: user.email,
      accessToken: accessToken,
      expiresIn: expiresIn
    }
    // response 
    res.send({ dataUser });
  });
}

exports.loginUser = (req, res, next) => {
  const userData = {
    email: req.body.email,
    password: req.body.password
  }
  User.findOne({ email: userData.email }, (err, user) => {
    if (err) return res.status(500).send('Server error!');

    if (!user) {
      // email does not exist
      res.status(409).send({ message: 'Something is wrong' });
    } else {
      const resultPassword = bcrypt.compareSync(userData.password, user.password);
      if (resultPassword) {
        const expiresIn = 24 * 60 * 60;
        const accessToken = jwt.sign({ id: user.id }, SECRET_KEY, { expiresIn: expiresIn });

        const dataUser = {
          _id:user._id,
          first_name:user.first_name,
          last_name:user.last_name,
          user_type:user.user_type,
          email: user.email,
          accessToken: accessToken,
          expiresIn: expiresIn
        }
        res.send({ dataUser });
      } else {
        // password wrong
        res.status(409).send({ message: 'Something is wrong' });
      }
    }
  });
}










