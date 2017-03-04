import React from 'react';
import { resolveImgSrc } from '../utils/common.js';
export default class Extra extends React.Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler(event) {
    event.stopPropagation();
    let extraName = this.props.name;

    this.chkExtra.checked = !this.chkExtra.checked;
    if(this.chkExtra.checked) {
      this.props.selectExtra(extraName);
    } else {
      this.props.unselectExtra(extraName);
    }
  }
  render() {
    let { name, img, isChecked } = this.props;
    return (
      <div className="col-xs-3 col-sm-3 col-md-3 burgerItem burgerColSpace" onClick={this.clickHandler}>
        <div className="centerAlign">
          <input type="checkbox" ref={chk => this.chkExtra = chk} defaultChecked={isChecked}/>
          <label className="burgerText">&nbsp;&nbsp;{name}</label>
        </div>
        <img src={resolveImgSrc(img)} className="img-responsive"/>
      </div>
    );
  }
}
