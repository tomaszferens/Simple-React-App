import React, { Component } from 'react';

class Inventory extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            price: '',
            status: '',
            desc: '',
            image: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(name) {
        return e => this.setState({
            [name]: e.target.value
        });
    }

    createDish(e) {
        e.preventDefault();
        const { name, price, status, desc, image } = this.state;
        const dish = {
            name,
            price,
            status,
            desc,
            image
        };

        this.props.addDish(dish);
        this.dishForm.reset();
    }
    
    render() {
        return (
            <div className="inventory">
                <h2>Inventory</h2>
                <form ref={(input) => this.dishForm = input} className="dish-form" onSubmit={(e) => this.createDish(e)}>
                    <input type="text" placeholder="Dish Name" onChange={this.handleChange('name')} />
                    <input type="text" placeholder="Dish Price" onChange={this.handleChange('price')} />
                    <select name="status" onChange={this.handleChange('status')}>
                        <option value="available">Fresh!</option>
                        <option value="unavailable">Sold Out!</option>
                    </select>
                    <textarea placeholder="Dish Desc" onChange={this.handleChange('desc')} ></textarea>
                    <input type="text" placeholder="Dish Image" onChange={this.handleChange('image')} />
                    <button type="submit">+ Add Item</button>
                </form>
                <button type="submit" onClick={this.props.loadSamples}>Load Sample Dishes</button>
            </div>
        );
    }
}

export default Inventory;