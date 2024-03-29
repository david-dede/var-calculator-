function promptForNumber(message) {
  let input = parseFloat(prompt(message));
  if (isNaN(input) || input <= 0) {
    // alert("Please enter a valid positive number.");
    return alert("input must be a number and must be greater than 0"); // Return NaN to indicate invalid input
    calculateTokens();
  }
  return input;
}

function calculateTokens() {
  let amountPaid = promptForNumber(
    "Enter the amount paid by the customer (including VAT):"
  );

  let pricePerUnit = promptForNumber(
    "Enter the price of one power unit in tokens:"
  );

  let vatRate = promptForNumber("Enter the VAT rate as a percentage:");

  let vatAmount = amountPaid * (vatRate / 100);
  let totalAmount = amountPaid - vatAmount;
  let tokens = Math.floor(totalAmount / pricePerUnit);

  let display = document.createElement("div");
  display.classList.add("display");
  display.innerHTML = `${tokens} tokens`;

  document.body.appendChild(display);
}

calculateTokens();
