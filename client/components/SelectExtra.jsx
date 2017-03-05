import React from 'react';
import SelectTitle from './SelectTitle.jsx';
import { EXTRAS } from '../redux/dataList.js';
import Extra from './Extra.jsx';
import NextBack from './NextBack.jsx';
import { browserHistory } from 'react-router';
export default class SelectExtra extends React.Component {
  constructor(props) {
    super(props);
    this.selectExtra = this.selectExtra.bind(this);
    this.unselectExtra = this.unselectExtra.bind(this);
    this.isChecked = this.isChecked.bind(this);
    this.back = this.back.bind(this);
  }
  selectExtra(extraName) {
    this.props.selectExtra(extraName);
  }
  unselectExtra(extraName) {
    this.props.unselectExtra(extraName);
  }
  isChecked(extraName) {
    let extras = this.props.order.extras;
    return (extras && extras.find(extra => extra == extraName));
  }
  back() {
    this.props.selectStep('Salad');
    browserHistory.push('/Burger/Salad');
  }
  render() {
    return (
      <div className="stepHeader">
        <SelectTitle title="Select Extra"/>
        <div className="row">
        {
          EXTRAS.map((extra, index) => <Extra isChecked={this.isChecked(extra.name)} selectExtra={this.selectExtra} unselectExtra={this.unselectExtra}  key={index}  {...extra}/>)
        }
        </div>
        <NextBack showBack={true} backHandler={this.back}/>
      </div>
    );
  }
}
