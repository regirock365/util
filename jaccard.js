// a jaccard similarity function
function jaccard_similarity(a, b) {
  // make sure a and b are arrays of strings
  if (
    Array.isArray(a) &&
    a.every((i) => typeof i === "string") &&
    Array.isArray(b) &&
    b.every((i) => typeof i === "string")
  ) {
    // return the jaccard similarity
    return intersection(a, b).length / union(a, b).length;
  } else {
    // if they are not strings or arrays, return 0
    return 0;
  }
}

// intersection function
function intersection(a, b) {
  // make sure a and b are arrays
  if (Array.isArray(a) && Array.isArray(b)) {
    // find the intersection
    return a.filter((x) => b.includes(x));
  } else {
    // if they are not arrays, return an empty array
    return [];
  }
}

// union function
function union(a, b) {
  // make sure a and b are arrays
  if (Array.isArray(a) && Array.isArray(b)) {
    // find the union
    return a.concat(b.filter((x) => !a.includes(x)));
  } else {
    // if they are not arrays, return an empty array
    return [];
  }
}

// export the functions
module.exports = { jaccard_similarity, intersection, union };
