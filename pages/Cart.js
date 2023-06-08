import React, {useContext, useState} from "react"
import {Context} from "../Context"
import CartItem from "../components/CartItem"
import {toDollar} from "../utils"

function Cart() {
	const {cartItems, emptyCart} = useContext(Context)
	const [ordering, setOrdering] = useState(false)

	const cartItemElements = cartItems.map(item => (
		<CartItem key={item.id} item={item} />
	))
	const total = cartItems.map(item => item.cost).reduce((a, b) => a + b, 0)

	function placeOrder() {
		setOrdering(true)
		setTimeout(() => {
			console.log('Order placed!')
			emptyCart()
			setOrdering(false)
		}, 3000)
	}

	const orderingText = ordering ? 'Ordering...' : 'Place Order'

	return (
		<main className="cart-page">
			<h1>Check out</h1>
			{cartItemElements}
			<p className="total-cost">{`Total: ${toDollar(total)}`}</p>
			{cartItems.length > 0 && <div className="order-button">
				<button onClick={placeOrder}>{orderingText}</button>
			</div>}
		</main>
	)
}

export default Cart
