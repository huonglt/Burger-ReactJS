import { connect } from 'react-redux';
import SelectCheese from '../components/SelectCheese.jsx';
import { selectStepAction, selectCheeseAction } from '../redux/actions.js';

const mapStateToProps = (state, props) => state

const mapDispatchToProps = (dispatch) => {
  return {
    selectStep: (stepName) => dispatch(selectStepAction(stepName)),
    selectCheese: (cheeseName) => dispatch(selectCheeseAction(cheeseName))
  }
}
const SelectCheeseContainer = connect(mapStateToProps, mapDispatchToProps)(SelectCheese)
export default SelectCheeseContainer
