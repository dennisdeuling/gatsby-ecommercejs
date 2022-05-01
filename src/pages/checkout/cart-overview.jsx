import React from 'react';

// components
import Layout from '../../components/Layout/Layout';
import CartOverview from '../../components/Checkout/CartOverview/CartOverview';

function CheckoutPage() {
	return (
		<Layout>
			<CartOverview />
		</Layout>
	);
}

export default CheckoutPage;
