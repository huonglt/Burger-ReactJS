import React from 'react';
import { resolveImgSrc, getCSSClass } from '../utils/common.js';
import Image from './Image.jsx';
export default class Cheese extends React.Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler() {
    this.props.selectCheese(this.props.name);
  }
  render() {
    let { name, img } = this.props;
    let isSelected = getCSSClass(this.props.isSelected);
    return (
      <div className={isSelected + " col-xs-3 col-sm-3 col-md-3 burgerItem burgerColSpace"} onClick={this.clickHandler}>
        <div className="centerAlign">{name}</div>
        <Image src={resolveImgSrc(img)}/>
      </div>
    );
  }
}
