export const SELECT_BUN = 'SELECT_BUN';
export const SELECT_MEAT = 'SELECT_MEAT';
export const SELECT_CHEESE = 'SELECT_CHEESE';
export const SELECT_SALAD = 'SELECT_SALAD';
export const UNSELECT_SALAD = 'UNSELECT_SALAD';
export const SELECT_EXTRA = 'SELECT_EXTRA';
export const UNSELECT_EXTRA = 'UNSELECT_EXTRA';
export const START_OVER = 'START_OVER';
export const SELECT_STEP = 'SELECT_STEP';
export const COMPLETE_ORDER = 'COMPLETE_ORDER';

export const selectBunAction = (bunName) => ({ type: SELECT_BUN, bunName });
export const selectMeatAction = (meatName) => ({ type: SELECT_MEAT, meatName });
export const selectCheeseAction = (cheeseName) => ({ type: SELECT_CHEESE, cheeseName });
export const selectSaladAction = (saladName) => ({ type: SELECT_SALAD, saladName});
export const unselectSaladAction = (saladName) => ({ type: UNSELECT_SALAD, saladName});
export const selectExtraAction = (extraName) => ({ type: SELECT_EXTRA, extraName});
export const unselectExtraAction = (extraName) => ({ type: UNSELECT_EXTRA, extraName});

export const startOverAction = () => ({ type: START_OVER });
export const completeOrderAction = () => ( { type: COMPLETE_ORDER });

export const selectStepAction = (stepName) => ({ type: SELECT_STEP, stepName });
