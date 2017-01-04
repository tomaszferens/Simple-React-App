import React, { Component } from 'react';

class Inventory extends Component {
    render() {
        return (
            <div className="inventory">
                <h1>Hello from Inventory</h1>
                <button onClick={this.props.loadSamples}>Load Sample Dishes</button>
            </div>
        );
    }
}

export default Inventory;