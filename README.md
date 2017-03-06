This little app is a rewrite of the same Burger Builder app I wrote awhile ago which was using AngularJS, HTMl5, and Bootstrap. Other build tools were grunt and bower.

I replace it with ReactJS, Redux, React-Boostrap, Babel for ES6. Build tools are web-pack, and yarn. Yarn is a tool to manage npm packages. I found it easier to use than npm

The test module for this app will be added later.

Things I learn from making this app:
- ReactJS components: Functional components & class components
- Type checking for React Components
- Routing with browser history
- JSX syntax
- ES6: modules, export, const / let, new Array methods, arrow functions
- Redux: store, state, binding React components to the redux store
- Actions / reducers
- React-Bootraps
- Using factory function to create Component classes of the same behavior and properties like Cheese class and Meat class. Checkout /client/hoc/hocFactory.js
- Using factory functions to generate common methods for components like next() and back(). Checkout /client/hoc/fnFactory.js

## Prerequisite
node & yarn preinstalled

- brew install node
- brew install yarn

I'm using node v7.5.0, yarn v0.20.3

## Install dependencies before you start
yarn install

## To start
yarn start
