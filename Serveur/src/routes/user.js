var User = require('../models/user');

module.exports = {

  getAll: function (req, res, next) {
    User.find(function (err, Users) {
      console.log("get all Users");
      if (err) return res.status(400).json(err);
     // res.render("Users", { json: Users });
     res.setHeader('Access-Control-Allow-Origin','*');
     return res.status(201).json(Users);

    });
  },


  createOne: function (req, res, next) {

    console.log("add User");

    User.create(req.body, function (err, User) {

      if (err) return res.status(400).json(err);
     // res.redirect("Users");
     res.status(201).json(User);
    });
  },


  
};

