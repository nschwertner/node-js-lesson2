// Exports behavior similar to:
//    var exports = module.exports = {};
// exports is a reference to module.export
// module.exports is initalized to an empty object

// Both of these assign property values to the same object:
module.exports.a = 3;
exports.b = 5;

// This will override the exports object (which is ok if that's what
// we need):
// module.exports = 3.14;

// This will not do anything good (so don't do it!):
// exports = 3.14;
