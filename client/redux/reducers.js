import { handleActions } from 'redux-actions';
import { SELECT_BUN, SELECT_STEP, SELECT_MEAT, SELECT_CHEESE, SELECT_SALAD, UNSELECT_SALAD, SELECT_EXTRA, UNSELECT_EXTRA, START_OVER } from './actions.js';

const initialState = { order: {}, currentStep: 'Bun'};

export const reducers = (state = initialState, action) => {
  switch(action.type) {
    case SELECT_BUN: {
      let order = {...state.order, bun: action.bunName};
      return {...state, order};
    }
    case SELECT_MEAT: {
      let order = {...state.order, meat: action.meatName};
      return {...state, order};
    }
    case SELECT_CHEESE: {
      let order = {...state.order, cheese: action.cheeseName};
      return {...state, order};
    }
    case SELECT_SALAD: {
      if(!state.order.salads) {
        let order = {...state.order, salads: [action.saladName]};
        return {...state, order};
      }
      if(!state.order.salads.find(salad => salad == action.saladName)) {
        let order = {...state.order, salads: [...state.order.salads, action.saladName]};
        return {...state, order};
      }
      return state;
    }
    case UNSELECT_SALAD: {
      let salads = state.order.salads;
      if(salads) {
        let index = salads.findIndex(salad => salad == action.saladName);
        if(index >= 0) {
          let start = (index > 0) ? 0 : 1;
          let length = salads.length;
          let order = {...state.order, salads: [...salads.slice(start, index), ...salads.slice(index + 1, length)]};
          if(order.salads.length == 0) {
            delete order.salads;
          }
          return {...state, order};
        }
      }
      return state;
    }
    case SELECT_EXTRA: {
      if(!state.order.extras) {
        let order = {...state.order, extras: [action.extraName]};
        return {...state, order};
      }
      if(!state.order.extras.find(extra => extra == action.extraName)) {
        let order = {...state.order, extras: [...state.order.extras, action.extraName]};
        return {...state, order};
      }
      return state;
    }
    case UNSELECT_EXTRA: {
      let extras = state.order.extras;
      if(extras) {
        let index = extras.findIndex(extra => extra == action.extraName);
        if(index >= 0) {
          let start = (index > 0) ? 0 : 1;
          let length = extras.length;
          let order = {...state.order, extras: [...extras.slice(start, index), ...extras.slice(index + 1, length)]};
          if(order.extras.length == 0) {
            delete order.extras;
          }
          return {...state, order};
        }
      }
      return state;
    }
    case START_OVER: {
      return initialState;
    }
    case SELECT_STEP: {
      return {...state, currentStep: action.stepName};
    }
    default: return state;
  }
}
