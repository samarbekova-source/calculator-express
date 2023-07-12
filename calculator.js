const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  //   console.log(req.body.num1);
  const num1 = Number(req.body.num1);
  const num2 = Number(req.body.num2);

  const result = num1 + num2;
  res.send("The result of the calculator is " + result);
});

// BMI starts here
app.get("/bmicalculator", function (req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});
// weight (kg) / [height (m)]2
app.post("/bmicalculator", function (req, res) {
  const weight = parseFloat(req.body.weight);
  const height = parseFloat(req.body.height);

  const result = weight / (height * height);
  res.send("Your BMI is " + result);
});

app.listen(3000, function () {
  console.log("Server 3000 is working Chika nodemon");
});
