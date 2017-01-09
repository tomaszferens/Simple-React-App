import React, { Component } from 'react';
import _ from 'lodash';

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
        this.addToOrder = this.addToOrder.bind(this);
        this.removeOrder = this.removeOrder.bind(this);
        this.removeDish = this.removeDish.bind(this);
    }

    addDish(dish) {
        const dishes = {...this.state.dishes};
        const timestamp = Date.now();
        dishes[`dish-${timestamp}`] = dish;
        this.setState({ dishes });
    }

    loadSamples() {
        const dishes = this.state.dishes;
        this.setState({
            dishes: {...dishes, ...sampleDishes}
        });
    }

    addToOrder(key) {
        const order = {...this.state.order};
        order[key] = order[key] + 1 || 1;
        this.setState({ order });
    }

    removeOrder() {
        this.setState({
            order: {}
        });
    }

    removeDish(dish) {
        const dishes = _.omit(this.state.dishes, dish);
        const order = _.omit(this.state.order, dish);
        this.setState({
            dishes,
            order
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
                                        <Dish removeDish={this.removeDish} key={key} index={key} details={this.state.dishes[key]} addToOrder={this.addToOrder} />
                                    )
                            }
                        </ul>
                    </div>
                    <Order 
                        dishes={this.state.dishes}
                        order={this.state.order}
                        removeOrder={this.removeOrder}
                        params={this.props.params}
                    />
                    <Inventory addDish={this.addDish} loadSamples={this.loadSamples} />
                </div>
            </div>
        );
    }
}