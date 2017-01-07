import React, { Component } from 'react';

class Order extends Component {
    constructor() {
        super();
        this.renderOrder = this.renderOrder.bind(this);
    }

    renderOrder(key) {
        const dish = this.props.dishes[key];
        const count = this.props.order[key];
        const price = dish.price.split('$')[0];

        return (
            <li key={key}>
                <span>{count} X {dish.name} </span>
                <span className="price">{(count * Number(price)).toFixed(2)}$</span>
            </li>
        );
    }

    render() {
        const orderIds = Object.keys(this.props.order);
        const total = orderIds.reduce((prevTotal, key) => {
            const dish = this.props.dishes[key];
            const count = this.props.order[key];
            
            return prevTotal + (count * dish.price.split('$')[0] || 0);
        }, 0);
        return (
            <div className="order">
                <h2>Your Order</h2>
                <ul className="order-list">
                    {orderIds.map(this.renderOrder)}
                    <li className="total">
                        <strong>Total: </strong>
                        {total.toFixed(2)}$
                    </li>
                </ul>
            </div>
        );
    }
}

export default Order;