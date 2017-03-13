import { selectBunAction, selectMeatAction, selectCheeseAction, selectSaladAction } from '../../client/redux/actions.js';
import { reducers } from '../../client/redux/reducers.js';

describe('app reducers', () => {
  it('should return the default initial state', () => {
    let action = {};
    // when arguments are passed in with undefined, default value will be used.
    //but if passed in null value, default value will not be used
    let newState = reducers(undefined, action);
    const initialState = { order: {}, currentStep: ''};
    expect(newState).toEqual(initialState);
  })
  it('given a blank action, reducer should return the new state as same as the state passed in', () => {
    let state = {};
    let action = {};
    let newState = reducers(state, action);
    expect(newState).toEqual({});
    expect(state).toEqual({});
  })

  it('select Sesame bun, the new state would have order of the Sesame bun. The passed in state unchanged', () => {
    let state = {};
    let bunName = 'Sesame';
    let selectSesame = selectBunAction(bunName);
    let newState = reducers(state, selectSesame);
    let expectedState = {order: {bun: bunName}};
    expect(newState).toEqual(expectedState);
    expect(state).toEqual({});
  })

  it('select Chicken, then new state would have order of chicken. the old existing state unchanged', () => {
    let state = {order: {bun: 'Sesame', meat: 'Beef'}};
    let meatName = 'Chicken';
    let newState = reducers(state, selectMeatAction(meatName));
    let expectedState = {order: {bun: 'Sesame', meat: meatName}};
    expect(newState).toEqual(expectedState);
    expect(state).toEqual(state);
  })

  it('select Cheese, then new state would have cheese order. the old existing state unchanged', () => {
    let state = {order: {bun: 'Sesame', meat: 'Chicken', cheese: 'swiss'}};
    let cheeseName = 'Cheedar';
    let newState = reducers(state, selectCheeseAction(cheeseName));
    let expectedState = {order: {bun: 'Sesame', meat: 'Chicken', cheese: cheeseName}};
    expect(newState).toEqual(expectedState);
    expect(state).toEqual(state);
  })

  it('Select a salad that already being added. the new state would have salads exactly as before. the old existing state unchanged', () => {
    let saladName = 'Onion';
    let state = {order: {salads: [saladName]}};
    let newState = reducers(state, selectSaladAction(saladName));
    let expectedState = {order: {salads: [saladName]}};
    expect(newState).toEqual(expectedState);
    expect(state).toEqual(state);
  })

  it('Select a salad not being selected before. the new state would have that selad appended. The old existing state unchaged', () => {
    let state = {order: {salads: ['Onion', 'Tomato']}};
    let saladName = 'Cucumber';
    let newState = reducers(state, selectSaladAction(saladName));
    let expectedState = {order: {salads: ['Onion', 'Tomato', saladName]}};
    expect(newState).toEqual(expectedState);
    expect(state).toEqual(state);
  })
})
