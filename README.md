This little app is a rewrite of the same Burger Builder app which I wrote a while ago using AngularJS, HTML5, and Bootstrap.

I replace it here with ReactJS, Redux, React-Boostrap, Babel for ES6. Build tools are web-pack, and yarn.

Things I learnt from making this app: EXTENSIVE
- Webpack and yarn. Yarn is a tool to manage npm packages. I found it easier to use than npm
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
- Using jest for unit tests. Only test redux layer at the moment. jest is being used by Facebook to test their code
- Using eslint for react / es6 modules
- Webpack build for different environments: development & "production"
- Code splitting on each route and on external dependencies. Application code is split into several bundles to speed up loading time. Loading component by demand at runtime, rather than loading everything at once

I enjoy using factory functions to generate React component classes or methods. It helps a lot in reducing duplicated code, and boost code reusability.

## Prerequisite
node & yarn preinstalled

- brew install node
- brew install yarn

I'm using node v7.5.0, yarn v0.20.3

## Install dependencies before you start
yarn install

## Scripts to run
```
yarn start:dev
```
  - running the app on "dev" enviroment. No hash in filename. No uglify / minification. Code splitting on each route
  - process.env.NODE_ENV = dev
  - using webpack-dev-server
  - running on port 8080
  - serving files from build folder
```
yarn start:prod
```
  - running the app on "production" environment. Hashing in file name. Uglify. Code splitting on each route &  external libraries (node_modules)
  - process.env.NODE_ENV = production
  - using webpack-dev-server
  - running on port 9090
  - serving files from dist folder

```
yarn build:dev
```
  - to see webpack generated bundle files in "dev" environment

```
yarn build:prod
```
  - to see webpack generated bundle files in "production" environment

```
yarn eslint
```
  - to lint jsx & js code

```
yarn eslint:report
```
  - to view eslint report in html style

## To test
yarn tests

## To test reducers only
yarn test:reducers
