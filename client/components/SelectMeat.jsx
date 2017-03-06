import React from 'react';
import { Meat } from '../hoc/hocFactory.jsx';
import { MEATS } from '../redux/dataList.js';
import SelectTitle from './SelectTitle.jsx';
import NextBack from './NextBack.jsx';
import { browserHistory } from 'react-router';
export default class SelectMeat extends React.Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.back = this.back.bind(this);
    this.selectMeat = this.selectMeat.bind(this);

  }
  componentDidMount() {
    this.props.selectStep('Meat');
  }
  next(event) {
    browserHistory.push('/Burger/Cheese');
  }
  back(event) {
    browserHistory.push('/Burger/Bun');
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
