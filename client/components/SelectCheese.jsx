import React from 'react';
import SelectTitle from './SelectTitle.jsx';
import Cheese from './Cheese.jsx';
import { CHEESES } from '../redux/dataList.js';
import NextBack from './NextBack.jsx';

export default class SelectCheese extends React.Component {
  constructor(props) {
    super(props);
    this.selectCheese = this.selectCheese.bind(this);
    this.next = this.next.bind(this);
    this.back = this.back.bind(this);
  }
  selectCheese(cheeseName) {
    this.props.selectCheese(cheeseName);
    this.next();
  }
  next() {
    this.props.selectStep('Salad');
    this.props.router.push('Burger/Salad');
  }
  back() {
    this.props.selectStep('Meat');
    this.props.router.push('Burger/Meat');
  }
  render() {
    return (
      <div className="stepHeader">
        <SelectTitle title="Select Cheese"/>
          <div className="row">
          {
            CHEESES.map((cheese, index) => <Cheese isSelected={this.props.order.cheese === cheese.name} selectCheese={this.selectCheese} key={index} {...cheese}/>)
          }
          </div>
          <NextBack showNext={true} showBack={true} nextHandler={this.next} backHandler={this.back}/>
      </div>
    );
  }
}
