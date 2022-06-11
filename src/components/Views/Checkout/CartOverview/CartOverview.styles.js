import styled from 'styled-components';
import { CustomLink } from '../../../Link/Link.styles';

export const Wrapper = styled.div`
	display: grid;
	justify-content: center;
	align-items: center;
	box-shadow: inset -0.6em -0.6em 1em #abb2b9, inset 0.4em 0.4em 0.5em #f8f9f9,
		0.8em 0.8em 2em #aeb6bf;
	border-radius: 4em;
	padding: 30px 25px;
	width: 40%;
	margin: 20px auto;
`;

export const WrapperPrice = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	margin: -10px 22px 0 0;
`;

export const Total = styled.p`
	//font-size: 1em;
	font-weight: bolder;
	font-size: 2.5em;
	text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;
