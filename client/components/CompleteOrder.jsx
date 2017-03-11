import React from 'react';
import Order from './Order.jsx';
import { STEP_COMPLETE } from '../data/stepData.js';
export default class CompleteOrder extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.selectStep(STEP_COMPLETE);
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
