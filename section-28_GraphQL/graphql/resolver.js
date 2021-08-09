/* Like Controller in RestAPIs */

module.exports = {
  /* match name "hello" from schema that has declared. */
  hello() {
    return {
      text: "Hello World!",
      views: 123456,
    };
  },
};
