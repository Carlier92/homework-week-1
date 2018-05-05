import React, { Component, Fragment } from 'react'
import './App.css'
import products from './components/products'
import CartItem from './components/CardItem'
import CheckoutButton from './components/CheckoutButton.js'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: []
        }
    }

// updateQuantity = (productId, updates) => {
//     this.setState({
//       quantity: this.state.players.map((quantity) => {
//         if (player.id !== playerId) return player
//         return { ...player, ...updates }
//       })
//     })
//   }
// }

IncrementItem(id) {
     this.setState(prevState => ({
         items: prevState.items.filter(item =>  {
             item.quantity = item.quantity + 1;
                 return true;
             })
         }));
         }










    incrementQuantity(productId) {
        console.log(productId)
    }

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
