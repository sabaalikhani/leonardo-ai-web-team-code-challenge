import React, { ReactElement } from 'react';
import { render, RenderOptions, screen } from '@testing-library/react';
import { Provider as ChakraProvider } from '@/components/ui/provider';

if (typeof window !== 'undefined') {
	window.matchMedia = jest.fn().mockImplementation((query) => ({
		matches: false,
		media: query,
		onchange: null,
		addListener: jest.fn(),
		removeListener: jest.fn(),
		addEventListener: jest.fn(),
		removeEventListener: jest.fn(),
	}));
}

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
	return <ChakraProvider>{children}</ChakraProvider>;
};

const customRender = (
	ui: ReactElement,
	options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render, screen };
