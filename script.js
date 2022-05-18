function soSanh() {
  let soMot = parseInt(document.getElementById("first").value);
  let soHai = parseInt(document.getElementById("second").value);
  if (soMot > soHai) {
    document.getElementById(
      "result"
    ).innerHTML = `<hr/> First number is bigger than Second number`;
  } else if (soMot <= soHai) {
    let sum = soMot + soHai;
    document.getElementById(
      "result"
    ).innerHTML = `<hr/> Sum of First number and Second number is ${sum}`;
  }
}

function reset() {
  let soMot = parseInt(document.getElementById("first").value);
  let soHai = parseInt(document.getElementById("second").value);
  document.getElementById("first").value = "";
  document.getElementById("second").value = "";
  document.getElementById("result").innerHTML = "";
}
