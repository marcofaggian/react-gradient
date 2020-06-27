# React Gradient [![Generic badge](https://img.shields.io/badge/View-Demo-<COLOR>.svg)](sharp-morse-5d526a.netlify.app/) [![Netlify Status](https://api.netlify.com/api/v1/badges/c527c41a-cd2a-4a66-ab0a-c87238783ad5/deploy-status)](https://app.netlify.com/sites/sharp-morse-5d526a/deploys)

> An Apple Pay-like static gradients generator

It uses:

- [Styled Components](https://styled-components.com/)
- [HSL color values](https://www.w3schools.com/colors/colors_hsl.asp)
- [Radial Gradient](https://developer.mozilla.org/en-US/docs/Web/CSS/radial-gradient)

#### Randomic generator

> You can find it at [`/src/App.tsx(9)`](https://github.com/marcofaggian/react-gradient/blob/master/src/App.tsx#L9)

```ts
const colors = [...Array(getRandomInt(15))].map(() => ({
  color: getRandomInt(360),
  x: getRandomInt(100),
  y: getRandomInt(100),
  width: getRandomInt(30),
}));
```

#### Gradient constructor

> You can find it at [`/src/styles/gradients.ts(10)`](https://github.com/marcofaggian/react-gradient/blob/master/src/styles/gradients.ts#L10)

```css
background-image: ${({ colors }: { colors: Colors }) =>
  colors.map(
    ({ x, y, width, color }, i) =>
      `radial-gradient(circle at ${x}% ${y}%,
      hsl(${color}, 100%, 90%) 0%,
      transparent ${width}%)${colors.length - 1 === i ? "" : ", "}`
  )};
```
