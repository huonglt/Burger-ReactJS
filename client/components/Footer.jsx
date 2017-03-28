import React from 'react';
export default () => {
  return (
    <div className="footer">
      <div className="container">
        <p>(Code 4 Fun) & (Fun 2 Code)</p>
        <p>{process.env.NODE_ENV} built</p>
      </div>
    </div>
  );
}
