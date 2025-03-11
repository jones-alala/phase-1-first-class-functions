// Exported functions for testing
function receivesAFunction(callback) {
  if (typeof callback === "function") {
    callback();
  } else {
    throw new Error("Argument must be a function");
  }
}

function returnsANamedFunction() {
  return function namedFunction() {
    console.log("I am a named function");
  };
}

function returnsAnAnonymousFunction() {
  return () => {
    console.log("I am an anonymous function");
  };
}
