import React from 'react';
export default (props) => {
  return (
    <div className="row stepHeading">
      <div className="col-xs-12 col-md-12">
        <span>{props.title}</span>
      </div>
    </div>
  );
}
