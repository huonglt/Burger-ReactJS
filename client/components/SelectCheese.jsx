import React from 'react';
import SelectTitle from './SelectTitle.jsx';
import { Cheese } from '../hoc/hocFactory.jsx';
import { CHEESES } from '../redux/dataList.js';
import NextBack from './NextBack.jsx';
import { browserHistory } from 'react-router';
export default class SelectCheese extends React.Component {
  constructor(props) {
    super(props);
    this.selectCheese = this.selectCheese.bind(this);
    this.next = this.next.bind(this);
    this.back = this.back.bind(this);
    this.props.selectStep('Cheese');
  }
  selectCheese(cheeseName) {
    this.props.selectCheese(cheeseName);
    this.next();
  }
  next() {
    browserHistory.push('/Burger/Salad');
  }
  back() {
    browserHistory.push('/Burger/Meat');
  }
  render() {
    return (
      <div className="stepHeader">
        <SelectTitle title="Select Cheese"/>
          <div className="row">
          {
            CHEESES.map((cheese, index) => <Cheese isSelected={this.props.order.cheese === cheese.name} clickHandler={this.selectCheese} key={index} {...cheese}/>)
          }
          </div>
          <NextBack showNext={true} showBack={true} nextHandler={this.next} backHandler={this.back}/>
      </div>
    );
  }
}
