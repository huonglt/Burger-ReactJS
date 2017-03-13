This little app is a rewrite of the same Burger Builder app which I wrote a while ago using AngularJS, HTML5, and Bootstrap. Build tools were grunt and bower. Responsive and mobile-friendly

I replace it here with ReactJS, Redux, React-Boostrap, Babel for ES6. Build tools are web-pack, and yarn. Yarn is a tool to manage npm packages. I found it easier to use than npm

I'm using jest as the test runner to test redux layer. Very quick, and simple to use. jest is being used by Facebook.

Things I learnt from making this app:
- ReactJS components: Functional components & class components, class component inheritance
- Type checking for React Components
- Routing with browser history
- JSX syntax
- ES6: modules, classes, export / import, spread operator, new Array methods, arrow functions
- Redux: store, state, binding React components to the redux store
- Actions / reducers
- React-Bootraps
- Using factory function to create Component classes of the same behavior and properties like Cheese class and Meat class. Checkout /client/hoc/hocFactory.js
- Using factory functions to generate common methods for components like next(), back(), and isChecked(). Checkout /client/hoc/fnFactory.js
- Proxying method called from child component to parent component. I found it is very helpful to pass in all arguments required to execute the parent component method instead of getting the arguments from other object like event
- Using jest for unit tests

I enjoy using factory functions to generate React component classes or methods. It helps a lot in reducing duplicated code, and boost code reusability.

## Prerequisite
node & yarn preinstalled

- brew install node
- brew install yarn

I'm using node v7.5.0, yarn v0.20.3

## Install dependencies before you start
yarn install

## To start
yarn start

## To test
yarn tests

## To test reducers only
yarn test:reducers
