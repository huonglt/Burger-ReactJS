import React from 'react';
import Bun from './Bun.jsx';
import { BUNS } from '../redux/dataList.js';
import NextBack from './NextBack.jsx';
import SelectTitle from './SelectTitle.jsx';
import { nextFnFactory, isSelectedFnFactory } from '../hoc/fnFactory.js';
import { STEPS, getTitle } from '../utils/common.js';

export default class SelectBun extends React.Component {
  constructor(props) {
    super(props);
    this.stepName = STEPS[0]; // Bun
    this.selectBun = this.selectBun.bind(this);
    this.next = nextFnFactory(this.stepName).bind(this);
    this.isSelected = isSelectedFnFactory(this.props.order.bun).bind(this);
  }
  componentDidMount() {
    this.props.selectStep(this.stepName);
  }
  selectBun(name) {
    this.props.selectBun(name);
    this.next();
  }
  render() {
    return (
      <div className="stepHeader">
        <SelectTitle title={getTitle(this.stepName)}/>
        <div className="row">
        {
          BUNS.map((bun, index) => <Bun isSelected={this.isSelected(bun.name)} key={index} {...bun} clickHandler={this.selectBun}/>)
        }
        </div>
        <NextBack showNext={true} nextHandler={this.next}/>
      </div>
    );
  }
}
