import React from 'react'

const Context = React.createContext()

function ContextProvider(props) {
	const [allPhotos, setAllPhotos] = React.useState([])
	const [cartItems, setCartItems] = React.useState([])

	function toggleFavorite(id) {
		setAllPhotos(prevPhotos => prevPhotos.map(photo => {
			photo.isFavorite = photo.id === id ? !photo.isFavorite : photo.isFavorite
			return photo
		}))
	}

	function toggleAddToCart(img) {
		if (!cartItems.includes(img)) {
			setCartItems(prev => [...prev, img])
		} else {
			setCartItems(prev => prev.filter(item => item !== img))
		}
	}

	function emptyCart() {
		setCartItems([])
	}

	React.useEffect(() => {
		fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
			.then(res => res.json())
			.then(data => {
				data.forEach(item => item.cost = 5.99)
				setAllPhotos(data)
			})
	}, [])

	return (
		<Context.Provider value={{allPhotos, cartItems, toggleFavorite, toggleAddToCart, emptyCart}}>
			{props.children}
		</Context.Provider>
	)
}

export {ContextProvider, Context}
