// CartItem: Should render <li> element
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'


export const itemShape = PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
})

export default class CartItem extends PureComponent {
    static propTypes = itemShape.isRequired


    render() {

        // console.log(this.props);
        const { products, onPlusClick } = this.props
         // console.log(this.props.onPlusClick());
        return (
            <ul>
                {products.map( (product, index) => {
                    return (
                        <li key={index} className="CartItem">
                            <p className="name">{product.name}</p>
                            <p className="price">{product.price}</p>
                            <p className="quantity">{product.quantity}</p>
                            <button onClick={() => onPlusClick(product.id)}>+</button>
                        </li>
                    )
                })}
            </ul>
        )
    }
}
