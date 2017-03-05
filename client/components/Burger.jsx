import React from 'react';
import ButtonBar from './ButtonBar.jsx';
import Order from './Order.jsx';
import _isEmpty from 'lodash.isempty';
import { browserHistory } from 'react-router';

export default class Burger extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.completeOrder = this.completeOrder.bind(this);
    this.startOver = this.startOver.bind(this);
  }

  handleClick(event) {
    this.props.selectStep(event.target.name);
    browserHistory.push('/Burger/' + event.target.name);
  }
  completeOrder() {
    this.props.completeOrder();
    browserHistory.push('/Burger/Complete');
  }
  startOver() {
    this.props.startOver();
    browserHistory.push('/Burger/Bun');
  }
  render() {
    let order = this.props.order;
    let currentStep = this.props.currentStep;

    return (
      <div >
        <div className="row stepHeader spacingBottom">
          <span className="glyphicon glyphicon-cutlery"> Select each ingredient below to build your own awesome burger!!!</span>
        </div>
        {
          (!_isEmpty(order) && currentStep != 'Complete') && <Order {...order} showOrderButtonBar={true} startOver={this.startOver} completeOrder={this.completeOrder}/>
        }
        <ButtonBar currentStep={currentStep} handleClick={this.handleClick}/>
        {this.props.children}
      </div>
    );
  }
}
