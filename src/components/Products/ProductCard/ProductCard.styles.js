import styled from 'styled-components';

export const ProductCardWrapper = styled.section`
	margin: 25px 0 25px 0;
	justify-self: center;
	width: 250px;
	background-color: #fff;
	border-radius: 4em;
	padding: 20px 25px;
	box-shadow: inset -0.6em -0.6em 1em #abb2b9, inset 0.4em 0.4em 0.5em #f8f9f9,
		0.8em 0.8em 2em #aeb6bf;
	cursor: pointer;
	transition: 0.3s;
	&:hover {
		box-shadow: inset -0.6em -0.6em 1em #bfd1ff, inset 0.4em 0.4em 0.5em #eff3ff,
			0.8em 0.8em 2em #839ad7;
	}
`;

export const ProductCardImage = styled.img`
	display: block;
	margin: 0 auto 0 auto;
	height: 125px;
`;

export const ProductCardHeadline = styled.h1`
	font-family: 'Supermercado', sans-serif;
	text-align: center;
	font-size: 2.5em;
	text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

export const ProductCardDescription = styled.p`
	text-align: left;
	font-size: 1.3em;
	line-height: 130%;
	text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;
