import React, {useContext} from "react"
import {Context} from "../Context";
import Image from "../components/Image";
import {getClass} from "../utils";

function Photos() {
	const {allPhotos} = useContext(Context)
	const images = allPhotos
			.map((photo, index) =>
				<Image key={photo.id} img={photo} className={getClass(index)} />
			)

	return (
		<main className="photos">
			{images}
		</main>
	)
}

export default Photos
