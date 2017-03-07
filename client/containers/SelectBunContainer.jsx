import { connect } from 'react-redux';
import SelectBun from '../components/SelectBun.jsx';
import { selectBunAction, selectStepAction } from '../redux/actions.js';

const mapStateToProps = (state, props) => state

const mapDispatchToProps = (dispatch) => {
  return {
    selectBun: (bunName) => dispatch(selectBunAction(bunName)),
    selectStep: (stepName) => dispatch(selectStepAction(stepName))
  }
}
export const SelectBunContainer = connect(mapStateToProps, mapDispatchToProps)(SelectBun)
