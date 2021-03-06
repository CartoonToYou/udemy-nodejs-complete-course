const { expect } = require("chai");
const sinon = require("sinon");
const mongoose = require("mongoose");

const User = require("../models/user");
const AuthController = require("../controllers/auth");

describe("Auth Controller", function () {
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
  it("should throw an error with code 500 if accessing the database fails", function (done) {
    sinon.stub(User, "findOne");
    User.findOne.throws();

    const req = {
      body: {
        email: "test@test.com",
        password: "tester",
      },
    };

    AuthController.login(req, {}, () => {}).then((result) => {
      /* return type error with an */
      expect(result).to.be.an("error");
      expect(result).to.have.property("statusCode", 500);
      /* use "done" to wait from async await in this function */
      done();
    });

    User.findOne.restore();
  });

  it("should send a response with a valid user status for an existing user", function (done) {
    const req = {
      userId: "5c0f66b979af55031b34728a",
    };
    const res = {
      statusCode: 500,
      userStatus: null,
      status: function (code) {
        this.statusCode = code;
        return this;
      },
      json: function (data) {
        this.userStatus = data.status;
      },
    };
    AuthController.getUserStatus(req, res, () => {}).then(() => {
      expect(res.statusCode).to.be.equal(200);
      expect(res.userStatus).to.be.equal("I am new!");
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
