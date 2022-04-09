import React from 'react';
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

	const category = data.allChecCategory.nodes;
	return category;
}

export default useMenuQuery;
