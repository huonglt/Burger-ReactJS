import React from 'react';
import { Meat } from '../hoc/hocFactory.jsx';
import { MEATS } from '../data/listData.js';
import { STEPS } from '../data/stepData.js';
import SelectTitle from './SelectTitle.jsx';
import NextBack from './NextBack.jsx';
import { nextFnFactory, backFnFactory, isSelectedFnFactory } from '../hoc/fnFactory.js';
import { getTitle } from '../utils/common.js';
export default class SelectMeat extends React.Component {
  constructor(props) {
    super(props);
    this.stepName = STEPS[1]; // Meat
    this.selectMeat = this.selectMeat.bind(this);
    this.next = nextFnFactory(this.stepName).bind(this);
    this.back = backFnFactory(this.stepName).bind(this);
    this.isSelected = isSelectedFnFactory(this.props.order.meat).bind(this);
  }
  componentDidMount() {
    this.props.selectStep(this.stepName);
  }
  selectMeat(meatName) {
    this.props.selectMeat(meatName);
    this.next();
  }
  render() {
    return (
      <div className="stepHeader">
        <SelectTitle title={getTitle(this.stepName)}/>
        <div className="row">
        {
          MEATS.map((meat, index) => <Meat key={index} isSelected={this.isSelected(meat.name)} clickHandler={this.selectMeat} {...meat}/>)
        }
        </div>
      <NextBack showNext={true} showBack={true} nextHandler={this.next} backHandler={this.back}/>
    </div>

    );
  }
}
