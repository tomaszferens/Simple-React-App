import React, { Component } from 'react';

class Order extends Component {
    constructor() {
        super();
        this.renderOrder = this.renderOrder.bind(this);
    }

    renderOrder(key) {
        const dish = this.props.dishes[key];
        const count = this.props.order[key];
        const price = dish.price;

        return (
            <li key={key}>
                <span><i>{count} x</i> {dish.name} </span>
                <span className="price"><strong>{(count * Number(price)).toFixed(2)}$</strong></span>
            </li>
        );
    }

    render() {
        const orderIds = Object.keys(this.props.order);
        const total = orderIds.reduce((prevTotal, key) => {
            const dish = this.props.dishes[key];
            const count = this.props.order[key];
            
            return prevTotal + (count * dish.price || 0);
        }, 0);
        return (
            <div className="order">
                <h2>Your Order</h2>
                <ul className="order-list">
                    {orderIds.map(this.renderOrder)}
                    <li className="total">
                        <hr />
                        <strong>
                            Total: {total.toFixed(2)}$
                        </strong>
                    </li>
                </ul>
                <button onClick={this.props.removeOrder}>Reset Order</button>
            </div>
        );
    }
}

export default Order;