import { getClient } from '@/apollo-client';
import { gql } from '@apollo/client';
import { Box, Grid, Text } from '@chakra-ui/react';
import { PageWrapper } from '@/components/ui/page-wrapper';
import { Modal } from '@/components/character/modal';
import { Content } from '@/components/character/content';
import { Info } from '@/components/character/info';
import { Pagination } from '@/components/character/pagination';
import {
	GetCharactersQuery,
	GetCharactersQueryVariables,
} from '@/generated/graphql';

const GET_CHARACTERS = gql`
	query GetCharacters($page: Int!) {
		characters(page: $page) {
			info {
				count
				pages
			}
			results {
				name
				image
				gender
				location {
					name
				}
				created
				species
				status
				id
			}
		}
	}
`;

const Characters = async ({
	params,
}: {
	params: Promise<{ slug: string }>;
}) => {
	const slug = Number((await params).slug);

	const { data } = await getClient().query<
		GetCharactersQuery,
		GetCharactersQueryVariables
	>({
		query: GET_CHARACTERS,
		variables: {
			page: slug,
		},
	});

	const isDataAvailable = !!data.characters?.results?.length;

	return (
		<PageWrapper testId='characters-page'>
			<Grid
				templateColumns='repeat(auto-fill, minmax(200px, 1fr))'
				gap={6}
			>
				{isDataAvailable ? (
					data.characters!.results!.map((result, i) => (
						<Modal
							key={result?.id || i}
							content={
								<Content
									name={result?.name}
									image={result?.image}
								/>
							}
							moreInfo={
								<Info
									image={result?.image}
									name={result?.name}
									status={result?.status}
									created={result?.created}
									species={result?.species}
									location={result?.location?.name}
									gender={result?.gender}
								/>
							}
						/>
					))
				) : (
					<Text as='p'>No characters found.</Text>
				)}
			</Grid>
			{isDataAvailable && (
				<Box py={4}>
					<Pagination
						currentPage={slug}
						totalPages={data.characters?.info?.pages ?? 0}
					/>
				</Box>
			)}
		</PageWrapper>
	);
};

export default Characters;
