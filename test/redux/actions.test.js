import { SELECT_BUN, selectBunAction } from '../../client/redux/actions.js';

describe('test selectBunAction', () => {
  it('should create a SELECT_BUN action with bun name Sesame', () => {
    let bunName = 'Sesame';
    let expectedAction = { type: SELECT_BUN, bunName };
    let actionToTest = selectBunAction(bunName);
    expect(actionToTest).toEqual(expectedAction);
  })
})
