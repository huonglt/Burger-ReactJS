import React from 'react';

export default class IngredientButton extends React.Component {
  render() {
    let {name, handleClick, currentStep} = this.props;
    let isActive = (currentStep === name) ? 'active' : '';
    return (
      <button type="button" className={isActive + " btn btn-default btn-sm burgerText burgerButton"} name={name} onClick={handleClick}>{name}</button>
    );
  }
}
