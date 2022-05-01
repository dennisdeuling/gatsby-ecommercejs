import React from 'react';

// helpers
import { formatPriceEUR } from '../../../helper_functions/helper_functions';

// components
import ProductTable from './ProductTable/ProductTable';

// styled components
import {
	CheckoutBtn,
	Table,
	TableData,
	TableHead,
	TableWrapper,
	WrapperBtn
} from './CartOverview.styles';

// hooks
import { useCart } from '../../../hooks/CartContext';

function CartOverview() {
	const cart = useCart();

	const products = cart?.line_items.map(product => {
		return <ProductTable key={product.id} product={product} />;
	});

	console.log(cart);

	return (
		<React.Fragment>
			<TableWrapper>
				<Table>
					<thead>
						<tr>
							<TableHead>Image</TableHead>
							<TableHead>Name</TableHead>
							<TableHead className="smaller_width">Price</TableHead>
							<TableHead className="smaller_width">Quantity</TableHead>
							<TableHead className="smaller_width">Amount</TableHead>
						</tr>
					</thead>
					<tbody>{products}</tbody>
					<tfoot>
						<tr>
							<TableData />
							<TableData />
							<TableData className="right">Total:</TableData>
							<TableData className="total">{cart?.total_items}</TableData>
							<TableData className="total">{formatPriceEUR(cart?.subtotal.raw)}</TableData>
						</tr>
					</tfoot>
				</Table>
				<WrapperBtn>
					<CheckoutBtn to="/checkout">Proceed to checkout</CheckoutBtn>
				</WrapperBtn>
			</TableWrapper>
		</React.Fragment>
	);
}

export default CartOverview;
