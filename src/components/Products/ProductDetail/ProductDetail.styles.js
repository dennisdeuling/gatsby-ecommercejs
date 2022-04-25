import styled from 'styled-components';

export const ProductDetailWrapper = styled.section`
	display: flex;
	justify-content: center;
	align-items: flex-start;
`;

export const ProductDetailTextWrapper = styled.div``;

export const ProductDetailImage = styled.img`
	height: 300px;
`;

export const ProductDetailHeadline = styled.h1`
	display: flex;
	justify-content: flex-start;
	font-family: 'Supermercado', sans-serif;
	text-align: center;
	font-size: 30px;
`;

export const ProductDetailDescription = styled.p`
	display: flex;
	justify-content: flex-start;
	font-family: 'Ubuntu', sans-serif;
	text-align: left;
	font-size: 20px;
	line-height: 130%;
`;

export const ProductDetailPrice = styled.p`
	padding: 0 20px;
	font-family: 'Ubuntu', sans-serif;
	text-align: center;
	font-size: 30px;
`;

export const ProductDetailButtons = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
`;
