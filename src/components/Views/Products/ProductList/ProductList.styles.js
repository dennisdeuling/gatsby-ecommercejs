import styled from 'styled-components';

export const ProductListWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr;

	@media (min-width: 768px) {
		grid-template-columns: 1fr 1fr;
	}

	@media (min-width: 1024px) {
		grid-template-columns: 1fr 1fr 1fr;
	}

	@media (min-width: 1440px) {
		grid-template-columns: 1fr 1fr 1fr 1fr;
	}
`;
