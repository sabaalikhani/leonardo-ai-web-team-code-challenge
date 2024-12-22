import NextImage from 'next/image';
import { Grid, Image, VStack } from '@chakra-ui/react';
import { Box, Text } from '@chakra-ui/react';
import { Character, Location } from '@/generated/graphql';

type InfoProps = Pick<
	Character,
	'image' | 'name' | 'status' | 'created' | 'species' | 'gender'
> & {
	location: Location['name'];
};

export const Info = ({
	image,
	name,
	status,
	created,
	species,
	location,
	gender,
}: InfoProps) => {
	return (
		<VStack data-testid='character-info'>
			{name && image ? (
				<Image asChild borderRadius='full' fit='cover'>
					<NextImage
						src={image}
						width={200}
						height={200}
						alt={name}
					/>
				</Image>
			) : (
				<Box borderRadius={'full'} width={200} height={200} />
			)}
			<Grid
				as='ul'
				templateColumns='repeat(2, auto)'
				w='80%'
				justifyContent={'space-between'}
				gapX={5}
				gapY={2}
			>
				{[
					{ label: 'Name', value: name },
					{ label: 'Status', value: status },
					{ label: 'Species', value: species },
					{ label: 'Gender', value: gender },
					{ label: 'Location', value: location },
					{
						label: 'Created',
						value: new Date(created || '').toLocaleDateString(),
					},
				].map(({ label, value }) => (
					<li key={label}>
						<Text color='gray.500'>{label}</Text>
						<Text fontWeight='bold'>{value}</Text>
					</li>
				))}
			</Grid>
		</VStack>
	);
};
