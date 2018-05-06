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

    componentDidMount() {
        // console.log('hoi');
        this.setState({productList: products})
    }

    render() {
        // console.log(this.state.productList);
        return (
            <Fragment>
                <div className="App">
                <Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Pacific'} />                    <h1 className="App-title">Groceries App</h1>
                <CartItem test="blabla" products={this.state.productList} onPlusClick={this.incrementQuantity}/>
                </div>
            </Fragment>
        )
    }
}

export default App
