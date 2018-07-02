# Client
This is the folder for all the UI code and assets.

## How to start
You can build the UI component of the application with
```
$ npm run build
```
and start it with
```
$ npm start
```

## Stack
### React
React is used as the view library. Styled-components is used for styling, a CSS-In-JS methodolgies. Abstract styling logics away from JS/JSX, and make JSX more syntatical.

### Redux
Redux is for state management. Although this application is small enougth it is arguable that it needs a state management tool. However, if there is one or two more features, it would be really handy.

### Jest
Jest + Enzyme/Renderer. Jest is the testing framework. Enzyme/Renderer is utility tool for test, mock and find out the details for the element.

### Webpack + Babel
Babel is for transpiling ES6 to ES5. Webpack is for minifies and bundles all the code. It outputs the result into `/public` folder.

### ESLint
Follow the recommended React eslint guide and with a couple more personalized rules.
