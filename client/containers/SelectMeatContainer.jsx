import { connect } from 'react-redux';
import SelectMeat from '../components/SelectMeat.jsx';
import { selectStepAction, selectMeatAction } from '../redux/actions.js';

const mapStateToProps = (state, props) => state

const mapDispatchToProps = (dispatch) => {
  return {
    selectStep: (stepName) => dispatch(selectStepAction(stepName)),
    selectMeat: (meatName) => dispatch(selectMeatAction(meatName))
  }
}
const SelectMeatContainer = connect(mapStateToProps, mapDispatchToProps)(SelectMeat)
export default SelectMeatContainer
