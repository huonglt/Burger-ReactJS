import { browserHistory } from 'react-router';
import { findStepIndex, hasItem } from '../utils/common.js';
import { STEPS, ROOT } from '../data/stepData.js';
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

 /*
  *  A factory to produce isSelected function to decide if a bun, meat, or cheese is selected aItem
  * value1 is the value from the prop of the component
  * value2 is the name of the item you want to check against
  */
 export const isSelectedFnFactory = (value1) => {
   return (value2) => (value1 == value2);
 }
