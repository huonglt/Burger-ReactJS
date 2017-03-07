import React from 'react';
import { resolveImgSrc, getCSSClass } from '../utils/common.js';
import Image from './Image.jsx';
import BaseComponent from './BaseComponent.jsx';
export default class Cheese extends BaseComponent {
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
