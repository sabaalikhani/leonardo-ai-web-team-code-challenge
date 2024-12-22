'use client';

import type { ReactNode } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '@/theme';

type ProviderProps = {
	children: ReactNode;
};

export const Provider = ({ children }: ProviderProps) => {
	return <ChakraProvider value={theme}>{children}</ChakraProvider>;
};
