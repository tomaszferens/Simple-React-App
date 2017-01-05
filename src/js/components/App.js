import React, { Component } from 'react';

import Dish from './Dish';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';

import sampleDishes from '../../sample-dishes';


export default class App extends Component {
    constructor() {
        super();
        this.state = {
            dishes: {},
            order: {}
        };
        
        this.loadSamples = this.loadSamples.bind(this);
        this.addDish = this.addDish.bind(this);
    }

    addDish(dish) {
        const dishes = {...this.state.dishes};
        const timestamp = Date.now();
        dishes[`dish-${timestamp}`] = dish;
        this.setState({ dishes });
    }

    loadSamples() {
        this.setState({
            dishes: sampleDishes
        });
    }

    render() {
        return (
            <div className="reactaurant">
                <Header tagline="Reactaurant" />
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
                    <Inventory addDish={this.addDish} loadSamples={this.loadSamples} />
                </div>
            </div>
        );
    }
}