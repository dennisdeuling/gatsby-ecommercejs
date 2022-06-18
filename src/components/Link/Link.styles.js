import styled from 'styled-components';
import { Link } from 'gatsby';

export const CustomLink = styled(Link)`
	color: ${props => props.color};
	text-decoration: none;
`;
