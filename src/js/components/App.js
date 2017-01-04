import React, { Component } from 'react';

import Order from './Order';
import Inventory from './Inventory';
import Dish from './Dish';

import sampleDishes from '../../sample-dishes';


export default class App extends Component {
    constructor() {
        super();
        this.state = {
            dishes: {},
            order: {}
        };
        
        this.loadSamples = this.loadSamples.bind(this);
    }

    loadSamples() {
        this.setState({
            dishes: sampleDishes
        });
    }

    render() {
        return (
            <div className="reactaurant">
                <h1>Reactaurant</h1>
                <div className="wrapper">
                    <div className="menu">
                        <h1><span>Menu</span></h1>
                        <ul className="list-of-dishes">
                            {
                                Object
                                    .keys(this.state.dishes)
                                    .map(key => 
                                        <Dish key={key} details={this.state.dishes[key]} />
                                    )
                            }
                        </ul>
                    </div>
                    <Order />
                    <Inventory loadSamples={this.loadSamples} />
                </div>
            </div>
        );
    }
}