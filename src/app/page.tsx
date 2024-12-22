import { Text, VStack } from '@chakra-ui/react';
import { cookies } from 'next/headers';
import Link from 'next/link';
import { Link as ChakraLink } from '@chakra-ui/react';
import { PageWrapper } from '@/components/ui/page-wrapper';

const Home = async () => {
	const cookieStore = await cookies();

	const userName = cookieStore.get('user_name');

	return (
		<PageWrapper>
			<VStack gapY={6}>
				<Text as={'h1'} textAlign={'center'}>
					Hi, {userName?.value}!
				</Text>
				<Text as={'h2'} textAlign={'center'}>
					Welcome to Rick and Morty character explorer
				</Text>
				<Text as={'h2'} textAlign={'center'}>
					Click{' '}
					<ChakraLink asChild rounded='md' appearance={'ghost'}>
						<Link href={'/characters/1'}>here</Link>
					</ChakraLink>{' '}
					to start your adventure!
				</Text>
			</VStack>
		</PageWrapper>
	);
};

export default Home;
