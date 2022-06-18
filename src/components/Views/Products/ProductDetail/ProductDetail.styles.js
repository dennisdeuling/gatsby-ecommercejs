import styled from 'styled-components';

export const ProductDetailWrapper = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	margin: 20px auto;
	width: 80%;
	background-color: #fff;
	border-radius: 4em;
	padding: 50px 25px;
	box-shadow: inset -0.6em -0.6em 1em #abb2b9, inset 0.4em 0.4em 0.5em #f8f9f9,
		0.8em 0.8em 2em #aeb6bf;

	@media (min-width: 768px) {
		flex-wrap: nowrap;
		width: 85%;
	}
	@media (min-width: 1024px) {
		width: 75%;
	}
	@media (min-width: 1440px) {
		width: 55%;
	}
	@media (min-width: 2560px) {
		width: 35%;
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
	text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

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
	text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

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
		width: 380px;
	}
`;

export const ProductDetailPrice = styled.p`
	padding: 0 20px;
	text-align: center;
	font-size: 2em;
	text-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;
