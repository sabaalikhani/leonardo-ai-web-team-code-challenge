import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support';

export const { getClient } = registerApolloClient(() => {
	return new ApolloClient({
		cache: new InMemoryCache({ addTypename: false }),
		link: new HttpLink({
			// NOTE: We can get this from env variable
			uri: 'https://rickandmortyapi.com/graphql',
		}),
	});
});
