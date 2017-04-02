import { connect } from 'react-redux';
import Burger from '../components/Burger.jsx';
import { selectStepAction, startOverAction, completeOrderAction } from '../redux/actions.js';

const mapStateToProps = (state, props) => state

const mapDispatchToProps = (dispatch) => {
  return {
    selectStep: (stepName) => dispatch(selectStepAction(stepName)),
    startOver: () => dispatch(startOverAction()),
    completeOrder: () => dispatch(completeOrderAction())
  }
}
const BurgerContainer = connect(mapStateToProps, mapDispatchToProps)(Burger)
export default BurgerContainer
