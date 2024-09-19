function calculateInterest() {
  // Get inputs
  var principle = parseFloat(document.getElementById("principle").value);
  var rate = parseFloat(document.getElementById("rate").value) / 100;
  var time = parseFloat(document.getElementById("time").value);

  // Check if inputs are valid numbers
  if (isNaN(principle) || isNaN(rate) || isNaN(time)) {
    document.getElementById("result").innerText = "Please enter valid numbers.";
    return;
  }

  // Nearest whole number
  principle = Math.round(principle);
  time = Math.round(time);

  // Calculate the total amount with interest
  var total = principle * (1 + rate * time);

  // Calculate the interest
  var interest = total - principle;

  //Results
  var resultBox = document.getElementById("result-box");
  resultBox.style.display = "block";
  document.getElementById(
    "result"
  ).innerText = `With a beginning principal of $${principle} and with a growth rate of ${(
    rate * 100
  ).toFixed(
    2
  )}% for ${time} years, your total interest will be $${interest.toFixed(
    2
  )} with a grand total of $${total.toFixed(2)}.`;
}
