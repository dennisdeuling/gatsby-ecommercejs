function capitalize(string) {
	let newString;
	if (typeof string === 'string') {
		newString = `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
	} else {
		newString = 'wrong format of input';
	}
	return newString;
}

export { capitalize };
