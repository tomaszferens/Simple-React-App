import React from 'react';

const Dish = ({ details, index, addToOrder }) => (
    <li className="menu-dish">
        <img src={details.image} />
        <div>
            <h4 className="dish-name">
                {details.name}
            </h4>
                <p>{details.desc}</p>
                <button onClick={() => addToOrder(index)} type="button">Buy</button>
        </div>
        <span className="price">{details.price}</span>
    </li>
);

export default Dish;