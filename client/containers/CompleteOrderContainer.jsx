import { connect } from 'react-redux';
import CompleteOrder from '../components/CompleteOrder.jsx';
import { selectStepAction } from '../redux/actions.js';

const mapStateToProps = (state, props) => {
  return state;
}

export const CompleteOrderContainer = connect(mapStateToProps)(CompleteOrder)
