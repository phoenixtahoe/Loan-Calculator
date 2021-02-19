window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  let intialVal = {amount: 1000, years: 20, rate: 4.5};
  let amount = document.getElementById("loan-amount");
  let years = document.getElementById("loan-years");
  let rate = document.getElementById("loan-rate");
  amount.value = intialVal.amount;
  years.value = intialVal.years;
  rate.value = intialVal.rate;
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let currentVal = getCurrentUIValues()
  const monthypayment = calculateMonthlyPayment(currentVal)
  updateMonthly(monthypayment)
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let monthlyRate = (values.rate / 100) / 12;
  monthypayment = (monthlyRate * values.amount) / (1 - Math.pow((1 + monthlyRate), -(values.years * 12)));
  return (monthypayment.toFixed(2))
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(currentVal) {
  let monthly = document.getElementById("monthly-payment");
  monthly.innerText = "$" + currentVal;
}
