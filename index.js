const form = document.querySelector("#form");
const firstName = document.querySelector("#first_name");
const lastName = document.querySelector("#last_name");
const email = document.querySelector("#email");
const queryTypes = document.querySelectorAll("[name='query_type']");
const message = document.querySelector("#message");
const consent = document.querySelector("#consent");
const errorMsgs = document.querySelectorAll(".errorMsg");
const SuccessMsg = document.querySelector("#success-message");

const isEmailValid = () => {
  const reg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return reg.test(String(email.value).toLowerCase());
};

const isQueryTypeSelected = () => {
  return Array.from(queryTypes).some((input) => input.checked);
};

const showError = () => {
  errorMsgs.forEach((err) => {
    err.classList.add("hidden"); // reset classlist
    if (email.validity.valueMissing || !isEmailValid()) {
      email.setAttribute("aria-invalid", true);
      err.id === "email_error" && err.classList.remove("hidden");
    }
    if (firstName.validity.valueMissing) {
      firstName.setAttribute("aria-invalid", true);
      err.id === "first_name_error" && err.classList.remove("hidden");
    }
    if (lastName.validity.valueMissing) {
      lastName.setAttribute("aria-invalid", true);
      err.id === "last_name_error" && err.classList.remove("hidden");
    }
    if (message.validity.valueMissing) {
      message.setAttribute("aria-invalid", true);
      err.id === "message_error" && err.classList.remove("hidden");
    }

    if (!consent.validity.valid) {
      consent.setAttribute("aria-invalid", true);
      err.id === "consent_error" && err.classList.remove("hidden");
    }

    if (!isQueryTypeSelected()) {
      err.id === "query_type_error" && err.classList.remove("hidden");
    }
  });
};

const isFormValid = () => {
  showError();
  return !Array.from(errorMsgs).some(
    (err) => !err.classList.contains("hidden")
  );
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  // Handle form submission
  if (isFormValid()) {
    window.scrollTo({ top: 0, behavior: "smooth" });
    SuccessMsg.classList.remove("hidden");
    SuccessMsg.classList.add("grid");
    form.reset();

    setTimeout(() => {
      SuccessMsg.classList.add("hidden");
      SuccessMsg.classList.remove("grid");
    }, 3000);
  }
});
