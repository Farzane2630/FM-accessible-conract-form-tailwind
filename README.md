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

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it. 

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Styled Components](https://styled-components.com/) - For styles


### What I learned

1. 👉 Radios in the same group (name="...") don’t each get a separate Tab stop — they act as a single control.
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

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.


## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)


## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

