import React from 'react';
import Order from './Order.jsx';
export default class CompleteOrder extends React.Component {
  constructor(props) {
    super(props);
    this.props.selectStep('Complete');
  }
  render() {
    let order = this.props.order;
    return (
      <div>
        <Order {...order} showOrderButtonBar={false}/>
        <div className="row stepHeader nextStepRow">
          <div className="col-xs-12 col-md-12 centerAlign">
              <span className="glyphicon glyphicon-thumbs-up">&nbsp;Thanks for playing. Enjoy your burger!!!</span>
          </div>
        </div>
      </div>
    );
  }
}
