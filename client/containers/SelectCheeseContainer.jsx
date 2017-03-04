import { connect } from 'react-redux';
import SelectCheese from '../components/SelectCheese.jsx';
import { selectStepAction, selectCheeseAction } from '../redux/actions.js';

const mapStateToProps = (state, props) => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectStep: (stepName) => dispatch(selectStepAction(stepName)),
    selectCheese: (cheeseName) => dispatch(selectCheeseAction(cheeseName))
  }
}
export const SelectCheeseContainer = connect(mapStateToProps, mapDispatchToProps)(SelectCheese)
