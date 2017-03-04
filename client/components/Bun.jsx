import React from 'react';
import { resolveImgSrc } from '../utils/common.js';
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
    let isSelectedItem = (this.props.isSelected) ? 'selectedItem' : '';
    return (
        <div className={isSelectedItem + " col-xs-3 col-md-3 burgerItem burgerColSpace"} onClick={this.clickHandler}>
          <div className="centerAlign">{name}</div>
          <div>
            <img src={resolveImgSrc(topImg)} className="img-responsive"/>
            <img src={resolveImgSrc(bottomImg)} className="img-responsive"/>
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
