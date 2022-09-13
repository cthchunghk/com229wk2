// Require uses for import module
// Relative path / Absolute path are OK
var course = require("./message.js");

var course1 = new course("COMP229", "Web Application Developmnet");

console.log(course1.detail());