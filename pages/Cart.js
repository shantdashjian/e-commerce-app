import React, {useContext} from "react"
import {Context} from "../Context"
import CartItem from "../components/CartItem"
import {toDollar} from "../utils"

function Cart() {
	const {cartItems} = useContext(Context)
	console.log(cartItems)
	const cartItemElements = cartItems.map(item => (
		<CartItem key={item.id} item={item} />
	))
	const total = cartItems.map(item => item.cost).reduce((a, b) => a + b, 0)

	return (
		<main className="cart-page">
			<h1>Check out</h1>
			{cartItemElements}
			<p className="total-cost">{`Total: ${toDollar(total)}`}</p>
			<div className="order-button">
				<button>Place Order</button>
			</div>
		</main>
	)
}

export default Cart
