document
  .getElementById("calculateBtn")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form submission

    let amountPaid = parseFloat(document.getElementById("amount").value);
    // let priceOfToken = parseFloat(document.getElementById("token").value);
    // let varPercentage = parseFloat(document.getElementById("var").value);

    // let varAmount = amountPaid * (varPercentage / 100);
    // let totalAmount = amountPaid - varAmount;
    // let token = Math.floor(totalAmount / priceOfToken);

    // document.getElementById("result").innerText = `david ${token}`;
  // });
