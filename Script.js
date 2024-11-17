function submitWithdrawal() {
  const accountName = document.getElementById("accountName").value;
  const accountNumber = document.getElementById("accountNumber").value;
  const profitBalance = parseFloat(
    document.getElementById("profitBalance").value.replace(/[^0-9.-]+/g, "")
  );
  const withdrawalAmount = parseFloat(
    document.getElementById("withdrawalAmount").value
  );
  const bankName = document.getElementById("bankName").value;

  if (!withdrawalAmount || !bankName) {
    alert("Please enter the withdrawal amount and select a bank.");
    return;
  }

  if (withdrawalAmount > profitBalance) {
    alert("Withdrawal amount exceeds your profit balance.");
    return;
  }

  const userConfirmed = confirm(
    `Withdrawal Request:\nAccount Name: ${accountName}\nAccount Number: ${accountNumber}\nAmount: $${withdrawalAmount}\nBank: ${bankName}`
  );

  if (userConfirmed) {
    // Delay the spinner start by 1 second after confirmation
    setTimeout(() => {
      // Show loader
      const loader = document.getElementById("loader");
      loader.classList.remove("hidden");

      // Start bouncing animation for 4 seconds
      let bounceDuration = 5000; // 4 seconds
      let interval = setInterval(() => {
        console.log("Spinner is bouncing...");
      }, 100);

      // Stop the spinner after 4 seconds and show the next message
      setTimeout(() => {
        clearInterval(interval);  // Stop the spinner
        loader.classList.add("hidden"); // Hide the spinner

        // Show the pending message
        const amount = 500.00;
        const pendingMessage = `

Dear Andrew Wandenai,

We are delighted to inform you that your deposit has been successfully confirmed, and the transfer of your profits to your bank account ending in 7947 is in progress. This transaction has been securely processed through our servers, utilizing AWS Cloud Services and advanced encryption technologies to ensure the confidentiality and integrity of your financial data.

To complete the final release of your funds, a data processing fee of $${amount} is required. This fee supports the continued operation of our secure infrastructure, enabling us to maintain seamless transactions and protect your financial interests.

We kindly request that you remit the data processing fee at your earliest convenience to facilitate the transfer. For any questions or further assistance, please do not hesitate to reach out to us at boacustomerservice648@gmail.com.

Thank you for your trust in our services. We remain committed to delivering secure, efficient, and reliable financial solutions to meet your needs.`;

        alert(`Transfer in Progress 90% Complete.\n${pendingMessage}`);
      }, bounceDuration); // 4 seconds for the spinner
    }, 1000); // 1 second delay after confirmation
  }
}