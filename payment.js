const bkashNumberInput = document.getElementById('bkashNumber');
const amountInput = document.getElementById('amount');
const paymentReasonInput = document.getElementById('paymentReason');
const paymentSubmitBtn = document.getElementById('paymentSubmitBtn');

paymentSubmitBtn.addEventListener('click', () => {
  const bkashNumber = bkashNumberInput.value.trim();
  const amount = amountInput.value.trim();
  const paymentReason = paymentReasonInput.value.trim();

  if (bkashNumber && amount && paymentReason) {
    // Handle payment submission logic here
    console.log('bKash Number:', bkashNumber);
    console.log('Amount:', amount);
    console.log('Payment Reason:', paymentReason);
    // Reset the form
    bkashNumberInput.value = '';
    amountInput.value = '';
    paymentReasonInput.value = '';
  }
});