# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

Check out my live demo here: https://deluxe-melomakarona-e0ccd8.netlify.app

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

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![advice-generator-screenshot](https://github.com/LBuchananCates/advice-generator-app/assets/100169368/d76c15c1-e305-4fb3-98fb-5fa1a3636a44)

### Links

- Live Site URL: deluxe-melomakarona-e0ccd8.netlify.app

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- advice API


### What I learned

- how to use APIs and some CSS animations (see code below)

```css
using the z-index was a new learning curve for me but I did it!
button {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: hsl(150, 100%, 66%);
  border-radius: 50%;
  border: none;
  cursor: pointer;
  height: 50px;
  width: 50px;
  justify-content: center; /* positions dice icon in middle of circle on y-axis */
  margin-top: -20px;
  position: relative;
  top: 50px;
  z-index: 2;
}

```
```js
- using fetch for the api was a new step for me, so Im pretty happy it turned out fine!

const adviceNum = document.getElementById("advice-number");
const adviceQuote = document.getElementById("advice");

const fetchAdvice = async () => {
  const res = await fetch("https://api.adviceslip.com/advice");
  const data = await res.json();
  console.log(data);

  adviceNum.innerHTML = `Advice #${data.slip.id}`;
  adviceQuote.innerHTML = `"${data.slip.advice}"`;
};

fetchAdvice();
```


### Continued development

- even though the actual coding and styling was easier, the challenge for me was in using an API for the first time and knowing how to google the information I need

### Useful resources

- MDN
- stack overflow

## Author

- Website - deluxe-melomakarona-e0ccd8.netlify.app
- Frontend Mentor - https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db/hub

