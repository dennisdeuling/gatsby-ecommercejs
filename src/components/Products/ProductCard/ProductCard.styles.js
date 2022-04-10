import styled from 'styled-components';
// import { GatsbyImage } from 'gatsby-plugin-image';

export const ProductWrapper = styled.section`
	//display: flex;
	//justify-content: center;
	//align-content: center;
	//justify-items: center;
	width: 250px;
	padding: 0 15px;
`;

export const ProductImage = styled.img`
	display: block;
	margin: 0 auto 0 auto;
	height: 125px;
`;

export const ProductHeadline = styled.h1`
	font-family: 'Supermercado';
	text-align: center;
	font-size: 30px;
`;

export const ProductDescription = styled.p`
	font-family: 'Ubuntu';
	text-align: left;
	font-size: 20px;
`;
