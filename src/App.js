import React, { Component, Fragment } from 'react'
import './App.css'
import products from './components/products'
import CartItem from './components/CardItem'
import CheckoutButton from './components/CheckoutButton'
import MyComponent from './components/clock'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [],
            quantity: 0
        }
    }

incrementQuantity = () => {
    this.setState({ quantity: this.state.quantity + 1 })
    console.log(this.state)
} // het maakt niet uit elke product er gedrukt word, telt alles bij elkaar op.
// nog iets pushen in products? .lenght daarop doen?

    render() {
        return (
            <Fragment>
                <div className="App">
                    <h1 className="App-title">Groceries App</h1>
                </div>
                <CartItem products={products} onPlusClick={this.incrementQuantity}/>
            </Fragment>
        )
    }
}

export default App
