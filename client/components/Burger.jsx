import React from 'react';
import ButtonBar from './ButtonBar.jsx';
import Order from './Order.jsx';
import _isEmpty from 'lodash.isempty';
import { findRoutePath, changeToRoute, STEP_COMPLETE, STEP_START_OVER } from '../utils/common.js';
export default class Burger extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.completeOrder = this.completeOrder.bind(this);
    this.startOver = this.startOver.bind(this);
  }

  handleClick(event) {
    let stepName = event.target.name;
    this.props.selectStep(stepName);
    changeToRoute(stepName);
  }
  completeOrder() {
    this.props.completeOrder();
    changeToRoute(STEP_COMPLETE);
  }
  startOver() {
    this.props.startOver();
    changeToRoute(STEP_START_OVER);
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
          (!_isEmpty(order) && currentStep != STEP_COMPLETE) && <Order {...order} showOrderButtonBar={true} startOver={this.startOver} completeOrder={this.completeOrder}/>
        }
        <ButtonBar currentStep={currentStep} handleClick={this.handleClick}/>
        {this.props.children}
      </div>
    );
  }
}
