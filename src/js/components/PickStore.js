import React, { Component } from 'react';

class PickStore extends Component {
    goToStore(e) {
        e.preventDefault();
        const storeId = this.storeInput.value;
        this.props.router.push(`/store/${storeId}`);
    }

    render() {
        return (
            
            <form className="store-selector" onSubmit={(e) => this.goToStore(e)}>
                <div className="group">
                    <input type="text" 
                        required 
                        ref={input => this.storeInput = input}
                    />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label>Reactaurant</label>
                    <button type="submit">Go to Store</button>
                    <code>// type anything above!</code>
                </div>
            </form>
        );
    }
}

export default PickStore;