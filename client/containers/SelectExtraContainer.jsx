import { connect } from 'react-redux';
import SelectExtra from '../components/SelectExtra.jsx';
import { selectStepAction, selectExtraAction, unselectExtraAction } from '../redux/actions.js';

const mapStateToProps = (state, props) => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectStep: (stepName) => dispatch(selectStepAction(stepName)),
    selectExtra: (extraName) => dispatch(selectExtraAction(extraName)),
    unselectExtra: (extraName) => dispatch(unselectExtraAction(extraName))
  }
}
export const SelectExtraContainer = connect(mapStateToProps, mapDispatchToProps)(SelectExtra)
