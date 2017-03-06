import React from 'react';
import Bun from './Bun.jsx';
import { BUNS } from '../redux/dataList.js';
import NextBack from './NextBack.jsx';
import SelectTitle from './SelectTitle.jsx';
import { browserHistory } from 'react-router';
export default class SelectBun extends React.Component {
  constructor(props) {
    super(props);
    this.selectBun = this.selectBun.bind(this);
    this.next = this.next.bind(this);
  }
  componentDidMount() {
    this.props.selectStep('Bun');
  }
  selectBun(name) {
    this.props.selectBun(name);
    this.next();
  }
  next(event) {
    browserHistory.push('/Burger/Meat');
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
