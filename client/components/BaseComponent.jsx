import React from 'react';
export default class BaseComponent extends React.Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler() {
    this.props.clickHandler(this.props.name);
  }
}
