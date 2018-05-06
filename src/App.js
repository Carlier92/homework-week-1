import React, { Component, Fragment } from 'react'
import './App.css'
import products from './components/products'
import CartItem from './components/CardItem'
import CheckoutButton from './components/CheckoutButton'
import Clock from 'react-live-clock'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            productList: [],
            totalPrice: 0
        }
    }

    incrementQuantity = (id) => {
        const updatedProducts = this.state.productList.map(product => {
            if(product.id === id) {
                product.quantity = product.quantity + 1
            }
            return product
        })
        this.setState({productList: updatedProducts})
    }

    checkout = (price) => {
        let total = 0
        this.state.productList.map(product => {
            return total += product.price * product.quantity
        })
        this.setState({totalPrice: total})
    }


    componentDidMount() {
        this.setState({productList: products})
    }

    render() {
        return (
            <Fragment>
                <div className="App">
                    <Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Pacific'} />
                    <h1 className="App-title">Groceries App</h1>
                    <CartItem products={this.state.productList} onPlusClick={this.incrementQuantity}/>
                    <p>Total Price: {this.state.totalPrice.toFixed(2)}</p>
                    <CheckoutButton products={this.state.productList} onCheckout={this.checkout}/>
                </div>
            </Fragment>
        )
    }
}

export default App
