function getClass(i) {
	if (i % 5 === 0) {
		return 'big';
	} else if (i % 6 === 0) {
		return 'wide'
	}
}

function toDollar(value) {
	return value.toLocaleString("en-US", {style: "currency", currency: "USD"})
}

export {getClass, toDollar}
