import styled from 'styled-components';

export const ProductWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	border-bottom: grey;
	border-bottom-style: solid;
`;

export const ProductImage = styled.img`
	margin-right: 0.5em;
`;

export const ProductHeadline = styled.h1`
	font-size: 1.2em;
	text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

export const Product = styled.div`
	align-self: flex-start;
`;

export const Price = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	margin-top: 2.5em;
	text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;
