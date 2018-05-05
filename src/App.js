import React, { Component, Fragment} from 'react'
import './App.css'
import products from './components/products'
import CartItem from './components/CardItem'
import CheckoutButton from './components/CheckoutButton.js'

class App extends Component {

    incrementQuantity(productId) {

    }

    render() {
        return (
            <Fragment>
                <div className="App">
                    <h1 className="App-title">Groceries App</h1>
                </div>
                <CartItem products={products}/>
            </Fragment>
        )
    }
}

export default App
