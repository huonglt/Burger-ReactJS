import React from 'react';
import IngredientButton from './IngredientButton.jsx';
import { INGREDIENTS } from '../redux/dataList.js';

export default (props) => {
  let { currentStep, handleClick } = props;
  return (
    <div className="row spacingBottom">
      {
        INGREDIENTS.map((ingredient, index) => <IngredientButton key={index}  currentStep={currentStep} name={ingredient} handleClick={handleClick}/>)
      }
    </div>
  );
}
