# Make It Real - Order summary card

This is a solution to the Order summary card project of the Make It Real course.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
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

- Visualize the purchase order summary information.
- Divide the summary card into components.
- Make it responsive for mobile devices.

### Screenshot

![](./screenshot.jpg)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- React-Vite
- Mobile-first workflow

### What I learned

Throughout this project, I gained a deeper understanding of how to work with components in React. I learned how to break down complex UIs into smaller, reusable components, improving the modularity and maintainability of the code

```jsx
function OrderHeader() {
  return (
    <div className="order-header">
      <h2>Order Summary</h2>
      <p>
        You can now listen to millions of songs, audiobooks, and podcasts on any
        device anywhere you like!
      </p>
    </div>
  );
}
```
### Continued development

In the future, I plan to further refine my skills in both React and Vite by exploring advanced topics such as state management with React's Context API and Redux, as well as optimizing Vite configurations for larger, more complex applications.

### Useful resources

- [React and Vite](https://carlosazaustre.es/react-vite) - This helped me for understanding how to efficiently set up a React project using Vite. The article provided a clear explanation of the advantages Vite offers in terms of faster development builds and a more streamlined configuration compared to traditional tools like Create React App.

- [Center a Div Vertically and Horizontally with Flexbox](https://www.freecodecamp.org/espanol/news/centrar-en-html-div-con-css/) - This is an amazing article which helped me finally understand the intricacies of centering elements both vertically and horizontally using Flexbox. Before this, I struggled with aligning content in the middle of the screen across different layouts

## Author

- Github - [GabrielMaQui](https://github.com/GabrielMaQui)

## Acknowledgments

I would like to thank the instructors at Make It Real for their guidance and support throughout this project.
