import styled from 'styled-components';

export const ProductCardWrapper = styled.section`
	//display: flex;
	//justify-content: center;
	//align-content: center;
	//justify-items: center;
	width: 250px;
	padding: 0 15px;
`;

export const ProductCardImage = styled.img`
	display: block;
	margin: 0 auto 0 auto;
	height: 125px;
`;

export const ProductCardHeadline = styled.h1`
	font-family: 'Supermercado', sans-serif;
	text-align: center;
	font-size: 30px;
`;

export const ProductCardDescription = styled.p`
	font-family: 'Ubuntu', sans-serif;
	text-align: left;
	font-size: 20px;
	line-height: 130%;
`;
