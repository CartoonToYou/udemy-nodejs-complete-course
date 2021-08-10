/* Like Controller in RestAPIs */
const bcrypt = require("bcryptjs");
const { create } = require("../models/user");

const User = require("../models/user");

module.exports = {
  /* match name "hello" from schema that has declared. */
  // hello() {
  //   return {
  //     text: "Hello World!",
  //     views: 123456,
  //   };
  // },

  createUser: async function ({ userInput }, req) {
    // const email = args.userInput.email;
    /* *** IMPORTANT! if use .then must return User.findOne and use .then *** */
    const existingUser = await User.findOne({ email: userInput.email });
    if (existingUser) {
      const error = new Error("User exists already!");
      throw error;
    }
    const hashedPw = await bcrypt.hash(userInput.password, 12);
    const user = new User({
      name: userInput.name,
      email: userInput.email,
      password: hashedPw,
    });
    const createdUser = await user.save();
    /* ._doc will populate especially user data exclude meta data of MongoDB */
    return {
      ...createdUser._doc,
      _id: createdUser._id.toString(),
    };
  },
};
