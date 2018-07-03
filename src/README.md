# Client
This is the folder for all the UI code and assets.

## Loader component
If you want see the full effect of the `Loader` component. You can use the network throttling tool offered by each browser to simulate the slow connections.

## Stack
### React
React is used as the view library. Styled-components is used for styling, a CSS-In-JS methodologies. Abstract styling logics away from JS/JSX, and make JSX more syntactically.

### Redux
Redux is for state management. Although this application is small enougth it is arguable that it needs a state management tool. However, if there is one or two more features, it would be really handy.

### Jest
Jest + Enzyme/Renderer. Jest is the testing framework. Enzyme/Renderer is utility tool for test, mock, and find out the details for the element.

### Webpack + Babel
Babel is for transpiling ES6 to ES5. Webpack is for minifies and bundles all the code. It outputs the result into `/public` folder.
