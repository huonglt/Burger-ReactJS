import React from 'react';

export default class IngredientButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.handleClick(this.props.name);
  }
  render() {
    let {name, currentStep} = this.props;
    let isActive = (currentStep === name) ? 'active' : '';
    return (
      <button type="button" className={isActive + " btn btn-default btn-sm burgerText burgerButton"} name={name} onClick={this.handleClick}>{name}</button>
    );
  }
}
