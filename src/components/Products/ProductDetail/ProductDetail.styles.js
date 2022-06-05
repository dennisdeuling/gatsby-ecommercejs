import styled from 'styled-components';

export const ProductDetailWrapper = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;

	@media (min-width: 768px) {
		flex-wrap: nowrap;
	}
`;

export const ProductDetailTextWrapper = styled.div``;

export const ProductDetailImage = styled.img`
	height: 15em;

	@media (min-width: 768px) {
		margin: 0 20px 0 0;
	}
`;

export const ProductDetailHeadline = styled.h1`
	display: flex;
	justify-content: center;
	font-family: 'Supermercado', sans-serif;
	font-size: 2.5em;

	@media (min-width: 768px) {
		justify-content: flex-start;
	}
`;

export const ProductDetailDescription = styled.p`
	margin: 0 auto 0 auto;
	text-align: center;
	font-size: 1.3em;
	line-height: 130%;
	width: 280px;

	@media (min-width: 375px) {
		width: 320px;
	}

	@media (min-width: 768px) {
		margin: 0;
		text-align: left;
		width: 380px;
	}

	@media (min-width: 1024px) {
		width: 450px;
	}
`;

export const ProductDetailButtons = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	flex-wrap: wrap;
	margin: 0 auto 0 auto;
	width: 280px;

	@media (min-width: 768px) {
		//justify-content: flex-start;
		width: 380px;
	}

	@media (min-width: 1024px) {
		flex-wrap: nowrap;
		width: 450px;
	}
`;

export const ProductDetailPrice = styled.p`
	padding: 0 20px;
	text-align: center;
	font-size: 2em;
`;
