import React from 'react';
import NavBar from './NavBar.jsx';
export default class App extends React.Component {
  render() {
    return (
      <div >
        <div className="header"><NavBar/></div>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}
App.propTypes = {
  children: React.PropTypes.oneOfType([React.PropTypes.object, React.PropTypes.array]).isRequired
}
