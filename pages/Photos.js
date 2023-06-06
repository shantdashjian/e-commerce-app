import React, {useContext} from "react"
import {Context} from "../Context";
import Image from "../components/Image";
import {getClass} from "../utils";

function Photos() {
	const {allPhotos, setAllPhotos} = useContext(Context)

	function toggleFavorite(id) {
		setAllPhotos(prevPhotos => prevPhotos.map(photo => {
			photo.isFavorite = photo.id === id ? !photo.isFavorite : photo.isFavorite
			return photo
		}))
	}

	const images = allPhotos
		.map((photo, index) =>
			<Image key={photo.id} img={photo} className={getClass(index)} toggleFavorite={() => toggleFavorite(photo.id)}/>
		)

	return (
		<main className="photos">
			{images}
		</main>
	)
}

export default Photos
