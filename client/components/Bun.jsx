import React from 'react';
import { resolveImgSrc, getCSSClass } from '../utils/common.js';
import Image from './Image.jsx';
export default class Bun extends React.Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler() {
    this.props.clickHandler(this.props.name);
  }
  render() {
    let {name, topImg, bottomImg, clickHandler} = this.props;
    let isSelected = getCSSClass(this.props.isSelected);
    return (
        <div className={isSelected + " col-xs-3 col-md-3 burgerItem burgerColSpace"} onClick={this.clickHandler}>
          <div className="centerAlign">{name}</div>
          <div>
            <Image src={resolveImgSrc(topImg)}/>
            <Image src={resolveImgSrc(bottomImg)}/>
          </div>
        </div>
    );
  }
}

Bun.propsTypes = {
  name: React.PropTypes.string.isRequired,
  topImg: React.PropTypes.string.isRequired,
  bottomImg: React.PropTypes.string.isRequired,
  clickHandler: React.PropTypes.func.isRequired
}
