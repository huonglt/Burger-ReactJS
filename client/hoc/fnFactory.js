import { browserHistory } from 'react-router';
import { STEPS, ROOT, findStepIndex, hasItem } from '../utils/common.js';
/*
 * A factory for the next function using in the OrderButtonBar
 */
export const nextFnFactory = (stepName) => {
  let index = findStepIndex(stepName);
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
export const backFnFactory = (stepName) => {
  let index = findStepIndex(stepName);
  let routeIndex = 0;
  if(index >= 1) {
    routeIndex = index - 1;
  }
  return () => {
    browserHistory.push(ROOT + STEPS[routeIndex]);
  }
}

/*
 * A factory to generate isChecked function to decide the checked value of a checkbox
 * Use to check / uncheck the Salad and Extra in SelectSalad and SelectExtra components
 */
 export const isCheckedFnFactory = (items) => {
   return (itemName) => {
     return hasItem(items, itemName);
   }
 }
