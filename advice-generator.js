// const req = new XMLHttpRequest();

// req.onload = function () {
//   console.log("IT LOADED!!!!");
//   const data = JSON.parse(this.responseText);
//   console.log(data.name, data.height);
// };

// req.onerror = function () {
//   console.log("ERROR");
//   console.log(this);
// };

// req.open("GET", "https://api.adviceslip.com/advice");
// req.send();

// fetch("https://api.adviceslip.com/advice") //fetch returns a promise, will send request to url
//   .then((res) => {
//     console.log("resolved!", res);
//     res.json();
//     return res.json; //returns promise
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((e) => {
//     console.log("error!", e);
//   });

const adviceNum = document.getElementById("advice-number");
const adviceQuote = document.getElementById("advice");

const fetchAdvice = async () => {
  const res = await fetch("https://api.adviceslip.com/advice");
  const data = await res.json();
  console.log(data);

  adviceNum.innerHTML = `Advice #${data.slip.id}`;
  adviceQuote.innerHTML = `"${data.slip.advice}"`;
};

fetchAdvice();
