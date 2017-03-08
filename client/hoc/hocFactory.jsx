import React from 'react';
import { resolveImgSrc, getCSSClass } from '../utils/common.js';
import Image from '../components/Image.jsx';
import BaseComponent from '../components/BaseComponent.jsx';
/*
 * Cheese & Meat are similar classes in terms of behavior and properties.
 * Use this hocFactory here to produce the Cheese class & Meat class
 * Better than creating two separates .jsx files in the source code, e.g Cheese.jsx & Meat.jsx
 */
const hocFactory = () => {
  return (
    class extends BaseComponent {
      render() {
        let { name, img } = this.props;
        let isSelected = getCSSClass(this.props.isSelected);
        return (
          <div className={isSelected + " col-xs-3 col-sm-3 col-md-3 burgerItem burgerColSpace"} onClick={this.clickHandler}>
            <div className="centerAlign">{name}</div>
            <div><Image src={resolveImgSrc(img)}/></div>
          </div>
        );
      }
    }
  );
}

export const Cheese = hocFactory();
export const Meat = hocFactory();
