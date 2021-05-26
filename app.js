let arr = "";
let k = "";

while (true) {
  arr = prompt("Please enter ONLY integer numbers and separate them by COMMA").split(",").map((i) => i.trim());
  k = prompt("Please enter one POSITIVE integer number FROM 1 to how many numbers you entered").trim();

  if (arr.every((i) => (i == parseInt(i) && !i.includes("."))) && (k > 0 && k <= arr.length && k == parseInt(k))) break;
  else alert("You entered wrong. Try again by entering ONLY integer numbers and separating them by COMMA and also entering one POSITIVE integer number FROM 1 to how many numbers you entered");
}

let maxArr = [];
let l = parseInt(k);

for (let i = 0; i < arr.length - k + 1; i++) {
  let first = arr[i];
  let second = arr[i + 1];
}


