import React, { useEffect, useState } from 'react';

import Commerce from '@chec/commerce.js';

const commerce = new Commerce(`${process.env.GATSBY_CHEC_PUBLIC_KEY}`);

function useCart() {
	const [cart, setCart] = useState();

	useEffect(() => {
		commerce.cart.retrieve().then(cart => setCart(cart));
	}, []);

	console.log(cart);

	return cart;
}

export default useCart;
