import React from "react"

import {Context} from "../Context"
import {toDollar} from "../utils"
import useHover from "../hooks/useHover"

function CartItem({item}) {
	const {toggleAddToCart} = React.useContext(Context)
	const [hovered, ref] = useHover()

	const iconClassName = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line"

	return (
		<div className="cart-item">
			<i
				className={iconClassName}
				onClick={() => toggleAddToCart(item)}
				ref={ref}
			>
			</i>
			<img src={item.url} width="130px" />
			<p>{toDollar(item.cost)}</p>
		</div>
	)
}

export default CartItem
