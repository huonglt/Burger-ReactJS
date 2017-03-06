import React from 'react';
import OrderButtonBar from './OrderButtonBar.jsx';

export default class Order extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let {bun, meat, cheese, salads, extras} = this.props;

    return (
      <div className="row stepHeader choiceBurgerLeft">
        <div style={{display:'table-cell', float:'none'}}>
          <span><span className="glyphicon glyphicon-shopping-cart"></span>&nbsp;&nbsp;Your choice burger is:</span>

          <ul className="unstyleList">
            {
              bun && <li><span className="glyphicon glyphicon-ok"></span>&nbsp;&nbsp;{bun}</li>
            }
            {
              meat && <li ><span className="glyphicon glyphicon-ok"></span>&nbsp;&nbsp;{meat}</li>
            }
            {
              cheese && <li ><span className="glyphicon glyphicon-ok"></span>&nbsp;&nbsp;{cheese} cheese</li>
            }
            {
              salads && <li ><span className="glyphicon glyphicon-ok"></span>&nbsp;&nbsp;Salads: [ {salads.join(', ')} ]</li>
            }
            {
              extras && <li ><span className="glyphicon glyphicon-ok"></span>&nbsp;&nbsp;Extras: [ {extras.join(', ')} ]</li>
            }

          </ul>
        </div>
        {
          this.props.showOrderButtonBar && <OrderButtonBar startOver={this.props.startOver} completeOrder={this.props.completeOrder}/>
        }
      </div>
    );
  }
}
