const { jaccard_similarity, intersection, union } = require("./jaccard");

// function to check if parameter is a string
function isString(str) {
  return typeof str === "string" || str instanceof String;
}

module.exports = { isString, intersection, union, jaccard_similarity };
