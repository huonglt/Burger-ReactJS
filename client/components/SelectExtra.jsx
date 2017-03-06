import React from 'react';
import SelectTitle from './SelectTitle.jsx';
import { EXTRAS } from '../redux/dataList.js';
import Extra from './Extra.jsx';
import NextBack from './NextBack.jsx';
import { backFnFactory, STEPS} from '../hoc/fnFactory.js';
export default class SelectExtra extends React.Component {
  constructor(props) {
    super(props);
    this.stepName = STEPS[4]; //Extra
    this.selectExtra = this.selectExtra.bind(this);
    this.unselectExtra = this.unselectExtra.bind(this);
    this.isChecked = this.isChecked.bind(this);
    this.back = backFnFactory(this.stepName).bind(this);
  }
  componentDidMount() {
    this.props.selectStep(this.stepName);
  }
  selectExtra(extraName) {
    this.props.selectExtra(extraName);
  }
  unselectExtra(extraName) {
    this.props.unselectExtra(extraName);
  }
  isChecked(extraName) {
    let extras = this.props.order.extras;
    return (extras && extras.find(extra => extra == extraName));
  }
  render() {
    return (
      <div className="stepHeader">
        <SelectTitle title="Select Extra"/>
        <div className="row">
        {
          EXTRAS.map((extra, index) => <Extra isChecked={this.isChecked(extra.name)} selectExtra={this.selectExtra} unselectExtra={this.unselectExtra}  key={index}  {...extra}/>)
        }
        </div>
        <NextBack showBack={true} backHandler={this.back}/>
      </div>
    );
  }
}
