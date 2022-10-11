import { useStaticQuery, graphql } from 'gatsby';

function useMenuQuery() {
	const data = useStaticQuery(graphql`
		{
			allChecCategory {
				nodes {
					id
					name
					slug
				}
			}
		}
	`);

	return data.allChecCategory.nodes;
}

export default useMenuQuery;
