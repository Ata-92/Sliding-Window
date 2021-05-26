let arr = "";
let k = "";

while (true) {
  arr = prompt("Please enter ONLY integer numbers and separate them by COMMA").split(",").map((i) => i.trim());
  k = prompt("Please enter one POSITIVE integer number FROM 1 to how many numbers you entered").trim();
}
