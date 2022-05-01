import styled from 'styled-components';
import { CustomLink } from '../../Link/Link.styles';

export const TableWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 100%;
`;

export const Table = styled.table`
	font-family: 'Ubuntu', sans-serif;
	font-size: 20px;
	text-align: center;
	border-collapse: collapse;
`;

export const TableHead = styled.th`
	padding: 10px 0;
	width: 150px;
	&.smaller_width {
		width: 100px;
	}
`;

export const TableData = styled.td`
	&.total {
		border-top: 1px solid black;
		font-weight: bold;
	}
	&.right {
		text-align: right;
	}
`;

export const WrapperBtn = styled.div`
	margin: 30px 0;
	width: 47%;
	align-self: flex-end;
`;

export const CheckoutBtn = styled(CustomLink)`
	padding: 10px;
	background-color: red;
	border-radius: 15px;
	color: white;
	font-family: 'Ubuntu', sans-serif;
	font-weight: bold;
	font-size: 25px;
	box-shadow: none;
`;
