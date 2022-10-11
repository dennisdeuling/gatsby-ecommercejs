import React from 'react';

// components
import Layout from '../../components/Views/Layout/Layout/Layout';
import { Wrapper } from '../../components/Views/Checkout/Checkout/Checkout.styles';

function PurchaseSuccessPage() {

	return (
		<div>
			<Layout>
				<Wrapper>
					<h1>Thank you for your purchase!</h1>
				</Wrapper>
				<Wrapper>
					<h3>You get an email with the order details!</h3>
				</Wrapper>
			</Layout>
		</div>
	);
}

export default PurchaseSuccessPage;
