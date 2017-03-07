import { browserHistory } from 'react-router';
import { STEPS, ROOT, STEP_COMPLETE, STEP_START_OVER } from '../data/stepData.js';

export const resolveImgSrc = (imgName) => require('../images/' + imgName);

/*
 * Find the index of the currentStep in the STEPS
 */
export const findStepIndex = (stepName) => STEPS.findIndex(step => step == stepName);

/*
 * toggle the checkbox and returns the checked value of the checkbox
 */
export const toggleCheckbox = (chk) => {
  chk.checked = !chk.checked;
  return chk.checked;
}

/*
 * execute function f1 when expression is true. otherwise execute function f2
 * arguments to either functions is via rest parameter ...args
 */
export const toggleFn = (exp, f1, f2, ...args) => {
  return (exp) ? f1(...args) : f2(...args);
}

/*
 * return the CSS class for selected item like Bun, Meat, and Cheese
 */
export const getCSSClass = (exp) => {
  return (exp) ? 'selectedItem' : '';
}

/*
 * Find the route path based on step name such as /Burger/Bun or /Burger/Meat
 * The step name must be one of the name in the STEPS array
 */
export const findRoutePath = (stepName) => {
  if(stepName == STEP_COMPLETE || findStepIndex(stepName) > -1) {
      return ROOT + stepName;
  }
  return ROOT + STEPS[0]; // default to /Burger/Bun
}

/*
 * Change to route using browserHistory.push
 * The route name is decided from the stepName which can be Bun, Meat, Cheese, Salad, Extra, Complete, and Blak for start over
 */
export const changeToRoute = (stepName) => {
  browserHistory.push(findRoutePath(stepName));
}

/*
 * Get title to display on each Select... page e.g Select Bun or Select Meat
 * Parameter is the stepName
 */
 export const getTitle = (stepName) => "Select " + stepName;

 /*
  * Determine if an array exists and it contains a particular item
  * Use for cases to check if a salad is selected or an extra is selected
  */
  export const hasItem = (items, itemName) => {
    return (items && items.find(item => item == itemName));
  }
