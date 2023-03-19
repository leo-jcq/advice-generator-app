# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db).

## Table of contents

-   [Overview](#overview)
    -   [The challenge](#the-challenge)
    -   [Links](#links)
-   [My process](#my-process)
    -   [Built with](#built-with)
    -   [What I learned](#what-i-learned)
-   [Author](#author)

## Overview

### The challenge

Users should be able to:

-   View the optimal layout for the app depending on their device's screen size
-   See hover states for all interactive elements on the page
-   Generate a new piece of advice by clicking the dice icon

### Links

-   Solution URL: [https://github.com/leo-jcq/advice-generator-app](https://github.com/leo-jcq/advice-generator-app)
-   Live Site URL: [https://leo-jcq.github.io/advice-generator-app/](https://leo-jcq.github.io/advice-generator-app/)

## My process

### Built with

-   CSS custom properties
-   Flexbox
-   React

### What I learned

I mainly learned how to get data from a web API into a React component.
This is done with this function :

```jsx
const getAdvice = () => {
    (async () => {
        const response = await fetch("https://api.adviceslip.com/advice");
        const responseData = await response.json();
        if (response.ok) {
            setAdvice(responseData.slip);
        } else {
            alert(JSON.stringify(responseData));
        }
    })();
};
```

It is called when the component is loaded in the useLayoutEffect and when the button is clicked

## Author

- Github - [@leo-jcq](https://github.com/leo-jcq)
- Frontend Mentor - [@leo-jcq](https://www.frontendmentor.io/profile/leo-jcq)
- Twitter - [@JacquetLo2](https://twitter.com/JacquetLo2)
