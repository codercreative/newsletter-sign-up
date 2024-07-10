const form = document.getElementById("form");
const mainWrapper = document.getElementById("main-wrapper");
const successMsgWrapper = document.getElementById("success-msg-wrapper");
const formWrapper = document.getElementById("form-wrapper");
const heroImg = document.getElementById("hero-img");
const userEmailSpan = document.getElementById("user-email");
const emailInput = document.getElementById("email");
const dismissBtn = document.getElementById("dismiss-btn");
const errorMsg = document.getElementById("error-msg");

form.addEventListener("submit", handleSubmit);
dismissBtn.addEventListener("click", handleDismiss);

// Is email valid
function isEmailValid(email) {
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return emailRegex.test(email);
}

function handleSubmit(e) {
  e.preventDefault();

  // Get the email value from the input field
  const email = emailInput.value.trim();

  if (!isEmailValid(email)) {
    showErrorMessage();
  } else {
    // Place the email value in the success message
    userEmailSpan.textContent = email;
    // Hide the main wrapper and show the success message
    mainWrapper.classList.add("hidden");
    formWrapper.classList.add("hidden");
    heroImg.classList.add("hidden");
    // removing the white background of the main wrapper from iPads and desktops
    mainWrapper.style.backgroundColor = "transparent";
    successMsgWrapper.classList.remove("hidden");

    // remove error state
    hideErrorMessage();
  }
}

// handleDismiss and eventlistener
function handleDismiss() {
  emailInput.value = "";
  // Show the main wrapper and hide the success message
  mainWrapper.classList.remove("hidden");
  formWrapper.classList.remove("hidden");
  heroImg.classList.remove("hidden");
  // removing the white background of the main wrapper from iPads and desktops
  mainWrapper.style.backgroundColor = "#FFF";

  successMsgWrapper.classList.add("hidden");

  hideErrorMessage();
}

function showErrorMessage() {
  emailInput.classList.add("email-error");
  errorMsg.classList.remove("hidden");
}

function hideErrorMessage() {
  emailInput.classList.remove("email-error");
  errorMsg.classList.add("hidden");
}
