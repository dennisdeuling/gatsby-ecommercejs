import React from 'react';

// components
import Layout from '../../components/Layout/Layout';

function PurchaseSuccessPage({ location }) {
	const { order } = location.state;

	return (
		<div>
			<Layout>
				<h1>Thank you {order.billing.name} for your purchase!</h1>
				<h3>You get an email with the order details!</h3>
			</Layout>
		</div>
	);
}

export default PurchaseSuccessPage;
