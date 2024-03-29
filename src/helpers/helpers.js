function capitalize(string) {
	let newString;
	if (typeof string === 'string') {
		newString = `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
	} else {
		newString = 'wrong format of input';
	}
	return newString;
}

function formatPriceEUR(price) {
	if (typeof price === 'number') {
		return new Intl.NumberFormat('de-DE', {
			style: 'currency',
			currency: 'EUR',
			minimumFractionDigits: 0
		}).format(price);
	} else {
		return 'Loading...';
	}
}

function descriptionWithoutHTML(inputText) {
	const regEx = /<\/?[^>]*>/gi
	return inputText.replace(regEx, '');
}

export { capitalize, formatPriceEUR, descriptionWithoutHTML };
