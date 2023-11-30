const red = document.getElementById("red");
const orange = document.getElementById("orange");
const green = document.getElementById("green");
orange.style.height = "200px";
orange.style.width = "200px";
orange.style.borderRadius = "50%";
orange.style.backgroundColor = "rgb(132, 86, 0)";

function everything() {
  red.style.backgroundColor = "red";
  setTimeout(function() {
    red.style.backgroundColor = "rgb(105, 0, 0)";
    orange.style.backgroundColor = "orange";
    green.style.backgroundColor = "rgb(0, 102, 0)";
  }, 5000);
  setTimeout(function() {
    red.style.backgroundColor = "rgb(105, 0, 0)";
    orange.style.backgroundColor = "rgb(126, 82, 0)";
    green.style.backgroundColor = "green";
  }, 7000);

  setTimeout(function() {
    red.style.backgroundColor = "red";
    orange.style.backgroundColor = "rgb(126, 82, 0)";
    green.style.backgroundColor = "rgb(0, 102, 0)";
  }, 12000);
}
var timer = setInterval(function() {
  everything();
}, 12000);

everything();

// document.body.appendChild("red");
// document.body.appendChild("orange");
// document.body.appendChild("green");
