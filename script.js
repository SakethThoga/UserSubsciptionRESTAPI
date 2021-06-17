"use strict";
function findMaxNumber(param1, param2, param3, param4) {
  var params = [param1, param2, param3, param4];
  let maxParam = params[0];
  for (let i = 0; i < 4; i++) {
    if (maxParam < params[i]) maxParam = params[i];
  }
  return maxParam;
}

document
  .querySelector(".findTheGreatest")
  .addEventListener("click", function () {
    const param1 = Number(document.querySelector(".param1").value);
    const param2 = Number(document.querySelector(".param2").value);
    const param3 = Number(document.querySelector(".param3").value);
    const param4 = Number(document.querySelector(".param4").value);
    let maxParam = findMaxNumber(param1, param2, param3, param4);
    console.log(maxParam);
    document.querySelector(".greatestNumber").textContent = maxParam;
  });

document.querySelector(".findAge").addEventListener("click", function () {
  const birthDayDate = document.querySelector(".bdayDate").value;
  var from = birthDayDate.split("-");
  var birthdateTimeStamp = new Date(from[0], from[1], from[2]);
  var cur = new Date();
  var diff = cur - birthdateTimeStamp;
  var currentAge = Math.floor(diff / 31557600000);
  document.querySelector(".currentAge").textContent = currentAge;
});

document.querySelector(".storeInArray").addEventListener("click", function () {
  const numbers = [
    document.querySelector(".num1").value,
    document.querySelector(".num2").value,
    document.querySelector(".num3").value,
    document.querySelector(".num4").value,
  ];
  document.querySelector(".arrayAnswer").textContent = "[" + numbers + "]";
});

document
  .querySelector(".evaluateExpression")
  .addEventListener("click", function () {
    const a = Number(document.querySelector(".num5").value);
    const b = Number(document.querySelector(".num6").value);
    const operator = document.querySelector(".operator").value;
    switch (operator) {
      case "1":
        document.querySelector(".evaluatedAnswer").textContent = a + b;
        break;
      case "2":
        document.querySelector(".evaluatedAnswer").textContent = a - b;
        break;
      case "3":
        document.querySelector(".evaluatedAnswer").textContent = a * b;
        break;
      case "4":
        document.querySelector(".evaluatedAnswer").textContent = a / b;
        break;
      default:
        break;
    }
  });
let bdarray = [];
document.querySelector(".enterData").addEventListener("click", function () {
  var biodata = {
    username: document.querySelector("#q51").value,
    email: document.querySelector("#q52").value,
    phno: document.querySelector("#q53").value,
    bdd: document.querySelector("#q54").value,
  };
  bdarray.push(biodata);
  localStorage.setItem("biodata", JSON.stringify(bdarray));
  let biodataGotten = JSON.parse(localStorage.getItem("biodata"));
  document.querySelector(".BioDataTable").innerHTML += `<tr><td>${
    biodataGotten[biodataGotten.length - 1].username
  }</td><td>${biodataGotten[biodataGotten.length - 1].email}</td><td>${
    biodataGotten[biodataGotten.length - 1].phno
  }</td><td>${biodataGotten[biodataGotten.length - 1].bdd}</td></tr>`;

  // for (let i = 0; i < biodataGotten.length; i++) {
  //   document.querySelector(
  //     ".BioDataTable"
  //   ).innerHTML += `<tr><td>${biodataGotten[i].username}</td><td>${biodataGotten[i].email}</td><td>${biodataGotten[i].phno}</td><td>${biodataGotten[i].bdd}</td></tr>`;
  // }
});
