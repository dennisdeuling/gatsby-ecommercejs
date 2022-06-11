import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const Label = styled.label`
	font-family: Ubuntu, sans-serif;
	padding-right: 15px;
	text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

export const Select = styled.select`
	font-family: Ubuntu, sans-serif;
	font-size: 1em;
	width: 71%;
	text-align: center;
	border-radius: 0.6em;
	padding: 5px 5px;
	margin: 3px 0;
`;

export const Option = styled.option`
	font-family: Ubuntu, sans-serif;
`;
