import React from 'react';
import SelectTitle from './SelectTitle.jsx';
import { SALADS } from '../redux/dataList.js';
import Salad from './Salad.jsx';
import NextBack from './NextBack.jsx';
import { browserHistory } from 'react-router';

export default class SelectSalad extends React.Component {
  constructor(props) {
    super(props);
    this.selectSalad = this.selectSalad.bind(this);
    this.unselectSalad = this.unselectSalad.bind(this);
    this.next = this.next.bind(this);
    this.back = this.back.bind(this);
    this.isChecked = this.isChecked.bind(this);
  }
  componentDidMount() {
    this.props.selectStep('Salad');
  }
  selectSalad(saladName) {
    this.props.selectSalad(saladName);
  }
  unselectSalad(saladName) {
    this.props.unselectSalad(saladName);
  }
  next() {
    browserHistory.push('/Burger/Extra');
  }
  back() {
    browserHistory.push('/Burger/Cheese');
  }

  isChecked(saladName) {
    let salads = this.props.order.salads;
    return (salads && salads.find(salad => salad == saladName));
  }
  render() {
    return (
      <div className="stepHeader">
        <SelectTitle title="Select Salad"/>
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
