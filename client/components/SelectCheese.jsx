import React from 'react';
import SelectTitle from './SelectTitle.jsx';
import { Cheese } from '../hoc/hocFactory.jsx';
import { CHEESES } from '../redux/dataList.js';
import NextBack from './NextBack.jsx';
import { nextFnFactory, backFnFactory, STEPS } from '../hoc/fnFactory.js';
export default class SelectCheese extends React.Component {
  constructor(props) {
    super(props);
    this.stepName = STEPS[2]; //Cheese
    this.selectCheese = this.selectCheese.bind(this);
    this.next = nextFnFactory(this.stepName).bind(this);
    this.back = backFnFactory(this.stepName).bind(this);
  }
  componentDidMount() {
    this.props.selectStep(this.stepName);
  }
  selectCheese(cheeseName) {
    this.props.selectCheese(cheeseName);
    this.next();
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
