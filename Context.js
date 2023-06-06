import React from 'react'

const Context = React.createContext()

function ContextProvider(props) {
	const [allPhotos, setAllPhotos] =React.useState([])

	return (
		<Context.Provider value={{allPhotos}}>
			{props.children}
		</Context.Provider>
	)
}

export {ContextProvider, Context}
