import React from 'react';
import { Link } from 'react-router';
export default class About extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <div className="row">
            <p>This is to learn myself up to skills of ReactJS, Redux, Webpack, ES6, Boostrap, & responsive design.</p>
            <p>Works well cross-browsers, and on mobile phones.</p>
        </div>
        <div className="row center-xs middle-xs">
          <div className="col-xs-12 col-md-6 col-md-offset-3">
            <Link className="btn btn-lg btn-block btn-success" to="/Burger/Bun">Start Playing</Link>
          </div>
        </div>
      </div>
    );
  }
}
