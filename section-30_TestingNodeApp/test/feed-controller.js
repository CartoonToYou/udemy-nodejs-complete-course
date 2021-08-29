const { expect } = require("chai");
const sinon = require("sinon");
const mongoose = require("mongoose");

const User = require("../models/user");
const FeedController = require("../controllers/feed");

describe("Feed Controller", function () {
  /* Hook lifecycle function => "before" trigger to do this before all test cases start */
  before(function (done) {
    mongoose
      .connect(
        "mongodb+srv://node-complete:dhvd6gdiupo@node-complete-cluster.dq9dg.mongodb.net/test-messages?retryWrites=true&w=majority"
      )
      .then((result) => {
        const user = new User({
          email: "test@test.com",
          password: "tester",
          name: "test",
          posts: [],
          _id: "5c0f66b979af55031b34728a",
        });
        return user.save();
      })
      .then(() => {
        done();
      });
  });

  /* "done" parameter from mocha (use for async await in mocha test) */
  it("should add a created post to the posts of the creator", function (done) {
    const req = {
      body: {
        title: "Test Post",
        content: "A Test Post",
      },
      file: {
        path: "abc",
      },
      userId: "5c0f66b979af55031b34728a",
    };
    const res = {
      status: function () {
        return this;
      },
      json: function () {},
    };

    FeedController.createPost(req, res, () => {}).then((savedUser) => {
      expect(savedUser).to.have.property("posts");
      expect(savedUser.posts).to.have.length(1);
      done();
    });
  });

  /* Hook lifecycle function => "after" trigger to do this after all test cases done */
  after(function (done) {
    /* Delete user every times when run test for make sure that can recursive testing */
    User.deleteMany({})
      .then(() => {
        /* Disconnect DB when finished testing */
        return mongoose.disconnect();
      })
      .then(() => {
        /* use "done" for quit event loop in async await with testing */
        done();
      });
  });
});

/* Other hook lifecycle */

// beforeEach(function() {})
/* before each "it" (test cases) start test will do this before every test start */

// afterEach(function() {})
/* after each "it" (test cases) end test will do this after every test end */
