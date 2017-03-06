import { browserHistory } from 'react-router';
export const STEPS = ['Bun', 'Meat', 'Cheese', 'Salad', 'Extra'];
const ROOT = '/Burger/';
/*
 * A factory for the next function using in the OrderButtonBar
 */
export const nextFnFactory = (currentStep) => {
  let index = STEPS.findIndex((step) => step == currentStep);
  let routeIndex = 0;
  if(index >= 0 && index < STEPS.length - 1) {
    routeIndex = index + 1;
  }
  return () => {
    browserHistory.push(ROOT + STEPS[routeIndex]);
  }
}

/*
 * A factory for the back function using in the OrderButtonBar
 */
export const backFnFactory = (currentStep) => {
  let index = STEPS.findIndex((step) => step == currentStep);
  let routeIndex = 0;
  if(index >= 1) {
    routeIndex = index - 1;
  }
  return () => {
    browserHistory.push(ROOT + STEPS[routeIndex]);
  }
}
