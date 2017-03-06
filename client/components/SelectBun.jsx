import React from 'react';
import Bun from './Bun.jsx';
import { BUNS } from '../redux/dataList.js';
import NextBack from './NextBack.jsx';
import SelectTitle from './SelectTitle.jsx';
import { nextFnFactory, STEPS } from '../hoc/fnFactory.js';
export default class SelectBun extends React.Component {
  constructor(props) {
    super(props);
    this.stepName = STEPS[0]; // Bun
    this.selectBun = this.selectBun.bind(this);
    this.next = nextFnFactory(this.stepName).bind(this);
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
        <SelectTitle title="Select bun"/>
        <div className="row">
        {
          BUNS.map((bun, index) => <Bun isSelected={bun.name === this.props.order.bun} key={index} {...bun} clickHandler={this.selectBun}/>)
        }
        </div>
        <NextBack showNext={true} nextHandler={this.next}/>
      </div>
    );
  }
}
