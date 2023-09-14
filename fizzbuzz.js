const button = document.getElementById("button");
const output = document.getElementById("output");

button.addEventListener("click", function () {
  const input = document.getElementById("input");
  const value = parseInt(input.value);
  let out = value;
  console.log(value);
  if (value === 0 || isNaN(out)) {
    console.log("invalid input");
    output.innerHTML += "invalid input" + "<br>";
    output.style.color = "red";
  } else {
    if (value % 3 === 0 && value % 5 === 0) {
      out = "FizzBuzz!";
      console.log("FizzBuzz!");
    } else if (value % 3 === 0) {
      out = "Fizz!";
      console.log("Fizz!");
    } else if (value % 5 === 0) {
      out = "Buzz!";
      console.log("Buzz!");
    } else {
      console.log(value);
    }
    output.innerHTML += out + "<br>";
    output.style.color = "black";
  }
});
