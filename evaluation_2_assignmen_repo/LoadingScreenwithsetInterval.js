
let intervalId = setInterval(() => {
  console.log("Loading...");
}, 1000);

// Stop the interval after 3 seconds
setTimeout(() => {
  clearInterval(intervalId);
  console.log("Loaded successfully!");
}, 5000);
