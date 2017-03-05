import React from 'react';
import { resolveImgSrc } from '../utils/common.js';
export default class Salad extends React.Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler(event) {
    event.stopPropagation();
    let saladName = this.props.name;

    this.chkSalad.checked = !this.chkSalad.checked;
    if(this.chkSalad.checked) {
      this.props.selectSalad(saladName);
    } else {
      this.props.unselectSalad(saladName);
    }
  }
  render() {
    let { name, img, isChecked } = this.props;
    return (
      <div className="col-xs-2 col-sm-2 col-md-2 burgerItem burgerColSpace" onClick={this.clickHandler}>
        <div className="centerAlign">
          <input ref={chk => this.chkSalad = chk} defaultChecked={isChecked} type="checkbox" value={name}/>
          <label className="burgerText">&nbsp;&nbsp;{name}</label>
        </div>
        <img src={resolveImgSrc(img)} className="img-responsive"/>
      </div>
    );
  }
}
