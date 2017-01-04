import React, { Component } from 'react';

class Dish extends Component {
    render() {
        const { details } = this.props;
        return(
            <li className="menu-dish">
                <img src={details.image} />
                <div>
                    <h4 className="dish-name">
                        {details.name}
                    </h4>
                        <p>{details.desc}</p>
                        <button type="button">Buy</button>
                </div>
                <span className="price">{details.price}</span>
            </li>
        );
    }
}

export default Dish;