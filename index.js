const form = document.querySelector("#form");
const firstName = document.querySelector("#first_name");
const lastName = document.querySelector("#last_name");
const email = document.querySelector("#email");
const queryTypes = document.querySelectorAll("[name='query_type']");
const message = document.querySelector("#message");
const consent = document.querySelector("#consent");
const successMsg = document.querySelector("#success-message");

const isEmailValid = () => {
  const reg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return reg.test(String(email.value).toLowerCase());
};

const isQueryTypeSelected = () => {
  return Array.from(queryTypes).some((input) => input.checked);
};

/*

🔥 Why this version is stronger

A. Validation is data-driven → no giant if/else chain.

B. Separation of concerns → isFormValid = logic, showError = UI.

C. Extendable → Adding a new field = just add an entry in validations.

D. Readable → The submit handler now reads almost like plain English.

*/
const validations = {
  firstName: {
    input: firstName,
    error: document.querySelector("#first_name_error"),
    validate: (el) => !el.validity.valueMissing,
  },
  lastName: {
    input: lastName,
    error: document.querySelector("#last_name_error"),
    validate: (el) => !el.validity.valueMissing,
  },
  email: {
    input: email,
    error: document.querySelector("#email_error"),
    validate: (el) => !el.validity.valueMissing && isEmailValid(),
  },
  queryType: {
    input: queryTypes,
    error: document.querySelector("#query_type_error"),
    validate: () => isQueryTypeSelected(),
  },
  message: {
    input: message,
    error: document.querySelector("#message_error"),
    validate: (el) => !el.validity.valueMissing,
  },
  consent: {
    input: consent,
    error: document.querySelector("#consent_error"),
    validate: (el) => el.checked,
  },
};

const showError = () => {
  Object.values(validations).forEach(({ input, error, validate }) => {
    const valid = validate(input);

    if (!valid) {
      error.classList.remove("invisible");
      input?.classList?.add("error-border");
      input?.setAttribute?.("aria-invalid", true);
    } else {
      error.classList.add("invisible");
      input?.classList?.remove("error-border");
      input?.removeAttribute?.("aria-invalid");
    }
  });
};

const isFormValid = () => {
  let allValid = true;

  // see README.md file to know more about Object.values() : What Ilearned number 6/
  Object.values(validations).forEach(({ input, validate }) => {
    const valid = validate(input);
    if (!valid) {
      allValid = false;
    }
  });

  showError(); // update the UI after checking validity
  return allValid;
};

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (isFormValid()) {
    window.scrollTo({ top: 0, behavior: "smooth" });
    successMsg.classList.remove("invisible");
    successMsg.classList.add("grid");
    form.reset();

    setTimeout(() => {
      successMsg.classList.add("invisible");
      successMsg.classList.remove("grid");
    }, 3000);
  }
});
