import { connect } from 'react-redux';
import SelectSalad from '../components/SelectSalad.jsx';
import { selectStepAction, selectSaladAction, unselectSaladAction } from '../redux/actions.js';

const mapStateToProps = (state, props) => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectStep: (stepName) => dispatch(selectStepAction(stepName)),
    selectSalad: (saladName) => dispatch(selectSaladAction(saladName)),
    unselectSalad: (saladName) => dispatch(unselectSaladAction(saladName))
  }
}
export const SelectSaladContainer = connect(mapStateToProps, mapDispatchToProps)(SelectSalad)
