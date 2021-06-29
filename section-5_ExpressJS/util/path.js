const path = require("path");

// Depreciated
// module.exports = path.dirname(process.mainModule.filename);

// Modern
module.exports = path.dirname(require.main.filename);
