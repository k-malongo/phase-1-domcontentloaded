// Your code goes here
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("text").innerHTML = document.getElementById("text").innerHTML.replace('JavaScript is so cool. It lets me add text to my page programmatically.', "This is really cool!");

  });
  
  console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  );