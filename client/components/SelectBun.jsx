import React from 'react';
import Bun from './Bun.jsx';
import { BUNS } from '../redux/dataList.js';
import NextBack from './NextBack.jsx';
import SelectTitle from './SelectTitle.jsx';

export default class SelectBun extends React.Component {
  constructor(props) {
    super(props);
    this.selectBun = this.selectBun.bind(this);
    this.next = this.next.bind(this);
  }
  selectBun(name) {
    this.props.selectBun(name);
    this.next();
  }
  next(event) {
    this.props.selectStep('Meat');
    this.props.router.push('Burger/Meat');
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
