import type { Metadata } from 'next';
import { Provider as ChakraProvider } from '@/components/ui/provider';
import { MainHeader } from '@/components/header/main-header';
import { cookies } from 'next/headers';

export const metadata: Metadata = {
	title: 'Rick and Morty',
	description: 'Explore Rick and Morty characters',
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const cookieStore = await cookies();

	const isLoggedIn =
		cookieStore.has('user_name') && cookieStore.has('job_title');

	return (
		<html lang='en' suppressHydrationWarning>
			<body>
				<ChakraProvider>
					{isLoggedIn && <MainHeader />}
					{children}
				</ChakraProvider>
			</body>
		</html>
	);
}
