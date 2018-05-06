import React, { PureComponent } from 'react'

export default class CheckoutButton extends PureComponent {
    render() {
        const { onCheckout, products } = this.props
        return (
            <div>
            <button className="CheckoutButton" onClick={() => onCheckout(products.price)}>checkout</button>
            </div>
        )
    }
}
