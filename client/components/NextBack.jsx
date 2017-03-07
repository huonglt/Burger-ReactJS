import React from 'react';
export default (props) => {
  return (
    <div className="row nextStepRow">
      <div className="col-xs-8 col-xs-offset-2 col-sm-4 col-sm-offset-4 col-md-4 col-md-offset-4">
        <div className="navButtons">
          {
            (props.showBack) &&
            <button type="button" className="btn btn-default btn-sm" onClick={props.backHandler}>
                <span className="glyphicon glyphicon-circle-arrow-left"></span> Back
            </button>
          }
          {
            (props.showNext) &&
            <button type="button" className="btn btn-default btn-sm" onClick={props.nextHandler}>
                <span className="glyphicon glyphicon-circle-arrow-right"></span> Next
            </button>
          }
        </div>
      </div>
  </div>
  );
}
