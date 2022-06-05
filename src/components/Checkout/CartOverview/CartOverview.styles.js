import styled from 'styled-components';
import { CustomLink } from '../../Link/Link.styles';

export const Wrapper = styled.div`
	display: grid;
	justify-content: center;
	align-items: center;
`;

export const WrapperPrice = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	margin: -10px 22px 0 0;
`;

export const Total = styled.p`
	font-size: 1em;
	font-weight: bolder;
`;

export const CheckoutBtn = styled(CustomLink)`
	padding: 10px;
	background-color: red;
	border-radius: 15px;
	color: white;
	font-weight: bold;
	font-size: 25px;
	box-shadow: none;
`;
