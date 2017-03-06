import React from 'react';
import { Meat } from '../hoc/hocFactory.jsx';
import { MEATS } from '../redux/dataList.js';
import SelectTitle from './SelectTitle.jsx';
import NextBack from './NextBack.jsx';
import { nextFnFactory, backFnFactory, STEPS } from '../hoc/fnFactory.js';

export default class SelectMeat extends React.Component {
  constructor(props) {
    super(props);
    this.stepName = STEPS[1]; // Meat
    this.next = nextFnFactory(this.stepName).bind(this);
    this.back = backFnFactory(this.stepName).bind(this);
    this.selectMeat = this.selectMeat.bind(this);

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
        <SelectTitle title="Select Meat"/>
        <div className="row">
        {
          MEATS.map((meat, index) => <Meat key={index} isSelected={this.props.order.meat === meat.name} clickHandler={this.selectMeat} {...meat}/>)
        }
        </div>
      <NextBack showNext={true} showBack={true} nextHandler={this.next} backHandler={this.back}/>
    </div>

    );
  }
}
