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

	function addToCart(img) {
		if (!cartItems.includes(img)) {
			setCartItems(prev => [...prev, img])
		}
	}

	React.useEffect(() => {
		fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
			.then(res => res.json())
			.then(data => setAllPhotos(data))
	}, [])

	return (
		<Context.Provider value={{allPhotos, toggleFavorite, addToCart}}>
			{props.children}
		</Context.Provider>
	)
}

export {ContextProvider, Context}
