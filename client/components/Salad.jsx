import React from 'react';
import { toggleCheckbox, toggleFn } from '../utils/common.js';
import Image from './Image.jsx';
export default class Salad extends React.Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler(event) {
    event.stopPropagation();
    let { name, selectSalad, unselectSalad } = this.props;
    let isChecked = toggleCheckbox(this.chkSalad);
    toggleFn(isChecked, selectSalad, unselectSalad, name);
  }
  render() {
    let { name, img, isChecked } = this.props;
    return (
      <div className="col-xs-2 col-sm-2 col-md-2 burgerItem burgerColSpace" onClick={this.clickHandler}>
        <div className="centerAlign">
          <input ref={chk => this.chkSalad = chk} defaultChecked={isChecked} type="checkbox" value={name}/>
          <label className="burgerText">&nbsp;&nbsp;{name}</label>
        </div>
        <Image src={img}/>
      </div>
    );
  }
}
