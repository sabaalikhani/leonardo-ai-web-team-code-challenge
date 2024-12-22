import { Box, Flex, HStack, Text } from '@chakra-ui/react';
import { NavLink } from './nav-link';

export const MainHeader = () => {
	return (
		<Box
			px={4}
			shadow='md'
			as='header'
			h={'var(--header-height)'}
			data-testid='main-header'
		>
			<Flex h='full' alignItems='center' justifyContent='space-between'>
				<Text fontWeight='bold'>
					Rick and Morty
				</Text>
				<HStack as='nav' gap={4}>
					<NavLink href='/'>Home</NavLink>
					<NavLink href='/profile'>Profile</NavLink>
				</HStack>
			</Flex>
		</Box>
	);
};
