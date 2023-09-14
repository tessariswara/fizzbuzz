const button = document.getElementById("button");
const output = document.getElementById("output");

button.addEventListener("click", function () {
  const input = document.getElementById("input");
  const value = parseInt(input.value);
  let out = value;
  console.log(value);
  if (value === 0 || isNaN(out)) {
    const outhtml = document.createElement("p");
    outhtml.style.margin = 0;
    outhtml.style.padding = 0;
    outhtml.textContent = "Invalid input";
    outhtml.style.color = "red";
    output.appendChild(outhtml);
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
    const outhtml = document.createElement("p");
    outhtml.style.margin = 0;
    outhtml.style.padding = 0;
    outhtml.textContent = out;
    outhtml.style.color = "black";
    output.appendChild(outhtml);
  }
});
