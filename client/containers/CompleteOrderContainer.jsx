import { connect } from 'react-redux';
import CompleteOrder from '../components/CompleteOrder.jsx';
import { selectStepAction } from '../redux/actions.js';

const mapStateToProps = (state, props) => state

const mapDispatchToProps = (dispatch) => {
  return {
    selectStep: (stepName) => dispatch(selectStepAction(stepName))
  }
}
export const CompleteOrderContainer = connect(mapStateToProps, mapDispatchToProps)(CompleteOrder)
