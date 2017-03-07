import React from 'react';
import SelectTitle from './SelectTitle.jsx';
import { SALADS } from '../data/listData.js';
import { STEPS } from '../data/stepData.js';
import Salad from './Salad.jsx';
import NextBack from './NextBack.jsx';
import { nextFnFactory, backFnFactory, isCheckedFnFactory } from '../hoc/fnFactory.js';
import { getTitle } from '../utils/common.js';

export default class SelectSalad extends React.Component {
  constructor(props) {
    super(props);
    this.stepName = STEPS[3]; // Salad
    this.selectSalad = this.selectSalad.bind(this);
    this.unselectSalad = this.unselectSalad.bind(this);
    this.next = nextFnFactory(this.stepName).bind(this);
    this.back = backFnFactory(this.stepName).bind(this);
    this.isChecked = isCheckedFnFactory(this.props.order.salads).bind(this);
  }
  componentDidMount() {
    this.props.selectStep(this.stepName);

  }
  selectSalad(saladName) {
    this.props.selectSalad(saladName);
  }
  unselectSalad(saladName) {
    this.props.unselectSalad(saladName);
  }
  render() {

    return (
      <div className="stepHeader">
        <SelectTitle title={getTitle(this.stepName)}/>
        <div className="row">
        {
          SALADS.map((salad, index) => <Salad isChecked={this.isChecked(salad.name)} selectSalad={this.selectSalad} unselectSalad={this.unselectSalad} key={index}  {...salad}/>)
        }
        </div>
        <NextBack showNext={true} showBack={true} nextHandler={this.next} backHandler={this.back}/>
      </div>
    );
  }
}
