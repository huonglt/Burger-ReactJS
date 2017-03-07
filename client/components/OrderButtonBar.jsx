import React from 'react';
export default (props) => {
  return (
    <div className="col-xs-4 col-sm-4 col-md-2 choiceBurgerRight">
      <button type="button" className="btn btn-default btn-sm burgerText" onClick={props.completeOrder}>
          <span className="glyphicon glyphicon-saved"></span> Complete
      </button>
      <div style={{height:'10px'}}></div>
      <button type="button" className="btn btn-default btn-sm burgerText" onClick={props.startOver}>
          <span className="glyphicon glyphicon-remove"></span> Start over
      </button>
    </div>
  );

}
