'use client';

import type { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Link as ChakraLink } from '@chakra-ui/react';

type NavLinkProps = {
	href: string;
	children: ReactNode;
};

export const NavLink = ({ href, children }: NavLinkProps) => {
	const pathname = usePathname();
	const isActive = pathname === href;

	return (
		<ChakraLink
			asChild
			px={3}
			py={2}
			rounded='md'
			appearance={isActive ? 'secondary' : 'ghost'}
			data-testid='nav-link'
		>
			<Link href={href}>{children}</Link>
		</ChakraLink>
	);
};