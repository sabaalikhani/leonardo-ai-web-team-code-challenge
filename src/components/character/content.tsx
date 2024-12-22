'use client';

import { useState } from 'react';
import { Text, Image, Skeleton, Box } from '@chakra-ui/react';
import NextImage from 'next/image';
import { Character } from '@/generated/graphql';

type ContentProps = Pick<Character, 'image' | 'name'>;

export const Content = ({ image, name }: ContentProps) => {
	const [isLoaded, setIsLoaded] = useState(false);

	return (
		<>
			{image && name ? (
				<Skeleton
					loading={!isLoaded}
					colorPalette={'gray'}
					borderRadius={'md'}
					as='span'
					data-testid='image-container'
				>
					<Image asChild borderRadius={'md'}>
						<NextImage
							src={image}
							alt={name}
							width={300}
							height={300}
							loading='lazy'
							onLoad={() => setIsLoaded(true)}
						/>
					</Image>
				</Skeleton>
			) : (
				<Box w={300} h={300} bg='gray.200' />
			)}
			<Text as='span' fontSize='lg' fontWeight='bold'>
				{name}
			</Text>
		</>
	);
};
