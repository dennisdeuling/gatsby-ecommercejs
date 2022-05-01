import styled from 'styled-components';

export const TableWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Table = styled.table`
	font-family: 'Ubuntu', sans-serif;
	font-size: 20px;
	text-align: center;
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
