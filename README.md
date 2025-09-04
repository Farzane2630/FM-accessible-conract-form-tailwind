# Frontend Mentor - Contact form solution

This is a solution to the [Contact form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/contact-form--G-hYlqKJj). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Complete the form and see a success toast message upon successful submission
- Receive form validation messages if:
  - A required field has been missed
  - The email address is not formatted correctly
- Complete the form only using their keyboard
- Have inputs, error messages, and the success message announced on their screen reader
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![Image](https://github.com/user-attachments/assets/51ad5097-b6ae-4676-be07-b3d1b7f66cd1)
<img width="520" height="931" alt="Image" src="https://github.com/user-attachments/assets/0df3c54c-dceb-4f83-987d-0c5cbbf96e94" />
<img width="520" height="955" alt="Image" src="https://github.com/user-attachments/assets/6c36411d-95d1-4c96-8067-c4841aceb98f" />
<img width="520" height="1123" alt="Image" src="https://github.com/user-attachments/assets/49477398-8c4a-45cb-be8d-55c8d3e0bb14" />
<img width="1314" height="781" alt="Image" src="https://github.com/user-attachments/assets/3b1e703a-c5aa-45b3-9fe0-26088735c995" />
<img width="1314" height="781" alt="Image" src="https://github.com/user-attachments/assets/51d50f21-0ff6-44ad-a40f-ce8db34e9655" />

### Links

- [Solution URL:](https://your-solution-url.com)
- [Live Site URL:](https://fm-accessible-conract-form-tailwind.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Tailwindcss
- Javascript

### What I learned

1. Radios in the same group (name="...") don’t each get a separate Tab stop — they act as a single control.
   You use arrow keys to switch between them. This is expected and correct for accessibility.

2. When trying to make the whole box clickable + keyboard accessible so that when it’s selected, the background changes (green) and the radio becomes checked.
   You need to:

- Use peer on the <input type="radio">

- Use peer-checked: variants on the wrapper or label

```
<fieldset class="query_section">
  <legend class="flex gap-2 pb-2">
    Query Type
    <svg class="w-1.5 h-1.5 fill-[#0c7d69ff]" focusable="false">
      <use xlink:href="#required"></use>
    </svg>
    <span class="sr-only">required</span>
  </legend>

  <div id="inputs_wrapper" class="grid sm:grid-cols-2 gap-4">
    <!-- General Enquiry -->
    <label
      for="general_enquiry"
      class="flex cursor-pointer items-center gap-2 border border-[#87a3a6ff] rounded-lg p-2 w-full peer-checked:bg-[#dff1e7ff] focus-within:outline-2 focus-within:outline-[#0c7d69ff]"
    >
      <input
        type="radio"
        name="query_type"
        id="general_enquiry"
        class="peer hidden"
      />
      <span>General Enquiry</span>
    </label>

    <!-- Support Request -->
    <label
      for="support_request"
      class="flex cursor-pointer items-center gap-2 border border-[#87a3a6ff] rounded-lg p-2 w-full peer-checked:bg-[#dff1e7ff] focus-within:outline-2 focus-within:outline-[#0c7d69ff]"
    >
      <input
        type="radio"
        name="query_type"
        id="support_request"
        class="peer hidden"
      />
      <span>Support Request</span>
    </label>
  </div>
</fieldset>
```

3. accent-[#0c7d69ff] → makes the radio dot green.

4. Key Accessibility Point: aria-live

Screen readers don’t automatically announce content that appears dynamically (like error messages after form validation).

If you wrap error messages in a container with aria-live="polite", the screen reader will announce them when they appear.

"polite" means: wait until the user has finished speaking before reading the message (so it’s not disruptive).

🛠 Example:

```
    <!-- Error message container (hidden initially) -->
    <div id="email_error" class="error" aria-live="polite"></div>
  </div>
```

```
<script>
  const form = document.getElementById("contact_form");
  const emailInput = document.getElementById("email");
  const emailError = document.getElementById("email_error");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // stop form for demo
    emailError.textContent = ""; // reset

    if (!emailInput.value) {
      emailError.textContent = "Email address is required.";
      emailInput.setAttribute("aria-invalid", "true");
    } else if (!emailInput.validity.valid) {
      emailError.textContent = "Please enter a valid email address.";
      emailInput.setAttribute("aria-invalid", "true");
    } else {
      emailInput.removeAttribute("aria-invalid");
      alert("Form submitted!");
    }
  });
</script>
```

📌 Key Accessibility Points

aria-live="polite" → announces the error text when it appears.

aria-invalid="true" → tells assistive tech the field is currently invalid.

✅ Result:

Sighted users see red text (once you style .error { color: red; }).

Screen reader users hear the message when it appears.

5. To check if form is valid:

! use case of "some" method !

const isFormValid = () => {
showError();
return !Array.from(errorMsgs).some(
(err) => !err.classList.contains("hidden")
);
};

6. What does Object.values() do?

It takes an object and returns an array of its values (ignores the keys).

Example:

```
const person = { name: "Farzaneh", age: 28, country: "Iran" };
console.log(Object.values(person));
// 👉 ["Farzaneh", 28, "Iran"]
```

So instead of looping over the keys, you’re looping over the values directly.

🔍 When to use Object.values()?

✅ When you don’t care about the keys and just need to work with the values.

✅ When your object is more like a dictionary (keys are labels, values are the real data).

✅ Makes iteration cleaner than Object.keys() and then looking up obj[key].

### Continued development

Storing and transforming data using api

```
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
```

### Useful resources

## Author

- Website - [Farzaneh Kazemi](https://verdant-bienenstitch-220a6d.netlify.app/)
- Frontend Mentor - [@Farzane2630](https://www.frontendmentor.io/profile/Farzane2630)
- StackOverflow - [@farzane-kazemi](https://stackoverflow.com/users/19888516/farzane-kazemi)

## Acknowledgments
