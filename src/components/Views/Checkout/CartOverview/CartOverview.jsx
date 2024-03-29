import React from 'react';

// helpers
import { formatPriceEUR } from '../../../../helpers/helpers';

// components
import ProductOverview from './ProductOverview/ProductOverview';
import LinkButton from '../../../Form/Buttons/LinkButton/LinkButton';

// styled components
import { Total, Wrapper, WrapperPrice } from './CartOverview.styles';

// hooks
import { useCart } from '../../../../hooks/CartContext';

function CartOverview() {
	const cart = useCart();

	const products = cart?.line_items.map(product => {
		return <ProductOverview key={product.id} product={product} />;
	});

	return (
		<React.Fragment>
			<Wrapper>
				{products}
				<WrapperPrice>
					<Total>Total: {formatPriceEUR(cart?.subtotal.raw)}</Total>
				</WrapperPrice>
				<LinkButton to="/checkout">Checkout</LinkButton>
			</Wrapper>
		</React.Fragment>
	);
}

export default CartOverview;
