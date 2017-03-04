import React from 'react';
import Meat from './Meat.jsx';
import { MEATS } from '../redux/dataList.js';
import SelectTitle from './SelectTitle.jsx';
import NextBack from './NextBack.jsx';

export default class SelectMeat extends React.Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.back = this.back.bind(this);
    this.selectMeat = this.selectMeat.bind(this);
  }
  next(event) {
    this.props.selectStep('Cheese');
    this.props.router.push('Burger/Cheese');
  }
  back(event) {
    this.props.selectStep('Bun');
    this.props.router.push('Burger/Bun');
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
          MEATS.map((meat, index) => <Meat key={index} isSelected={this.props.order.meat === meat.name} selectMeat={this.selectMeat} {...meat}/>)
        }
        </div>
      <NextBack showNext={true} showBack={true} nextHandler={this.next} backHandler={this.back}/>
    </div>

    );
  }
}
