# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](assets/images/screenshot.png)

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
- JavaScript

### What I learned

Weird issue: I could not hide the mainWrapper when clicking on the submit button. I had to hide the image and formWrapper separately in JS. I fixed it like this:

```js
if (form.checkValidity()) {
  mainWrapper.classList.add("hidden");
  formWrapper.classList.add("hidden");
  heroImg.classList.add("hidden");
  // removing the white background of the main wrapper from iPads and desktops
  mainWrapper.style.backgroundColor = "transparent";

  successMsgWrapper.classList.remove("hidden");
} else {
  alert("Please enter a valid email address");
}
```

Also, after hiding the wrappers and the img, a white circle remained. I had to fix it in JS with this line of code:

```js
// removing the white background of the main wrapper from iPads and desktops
mainWrapper.style.backgroundColor = "transparent";
```

Have to remember that when centering the main content on the page, I have to include `height: 100vh` to the body like this:

```css
body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
```

Switching images based on browser size:

```html
<picture>
  <!-- Mobile hero image -->
  <source
    media="(max-width:767px)"
    srcset="assets/images/illustration-sign-up-mobile.svg"
  />
  <!-- Desktop hero image -->
  <source
    media="(min-width:768px)"
    srcset="assets/images/illustration-sign-up-desktop.svg"
  />
  <!-- Fallback image for browsers that do not support picture -->
  <img
    src=""
    class="hero-img"
    alt="Orange/red color hero image with tech images"
  />
</picture>
```

Using an svg icon instead of regular bullets:

```css
li::before {
  content: url(assets/images/icon-list.svg);
  margin-right: 0.5em;
}
```

Using `display: flex` and `align-items: flex-start` for `li` to ensure that the text for the list items remains properly aligned even when it wraps onto multiple lines:

```css
li {
  list-style-type: none;
  display: flex;
  align-items: flex-start;
}
```

Reset the dismiss button on larger screens than mobile:

```css
.dismiss-btn {
  position: relative; /* Reset to relative positioning */
  bottom: auto; /* Reset bottom */
  left: auto; /* Reset left */
  transform: none; /* Reset transform */
  width: 100%;
  margin-top: 0.5em;
}
```

To handle validation of email inputs purely through my custom JavaScript logic, I had to remove `required` and `type="email` attributes from my `input` element. These attributes trigger the browser's automated validation messages.
