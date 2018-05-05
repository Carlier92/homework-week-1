// CartItem: Should render <li> element
import React, { PureComponent } from 'react' //of PureComponent?
import PropTypes from 'prop-types'


export const itemShape = PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
})

export default class CartItem extends PureComponent { //of PureComponent?
    static propTypes = itemShape.isRequired

    render() {

        console.log(this.props);
        const { products } = this.props

        return (
            <ul>
                {products.map( (product, index) => {
                    return (<li key={index} className="CartItem">
                        <p className="name">{product.name}</p>
                        <p className="price">{product.price}</p>
                    </li>)
                })}
            </ul>
        )
    }
}
