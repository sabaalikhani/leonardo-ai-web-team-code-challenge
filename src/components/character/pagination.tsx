'use client';

import { HStack } from '@chakra-ui/react';
import {
	PaginationItems,
	PaginationNextTrigger,
	PaginationPrevTrigger,
	PaginationRoot,
} from '@/components/ui/pagination';

type PaginationProps = {
	currentPage: number;
	totalPages: number;
};

export const Pagination = ({ currentPage, totalPages }: PaginationProps) => {
	return (
		<PaginationRoot
			count={totalPages}
			pageSize={1}
			defaultPage={currentPage}
			getHref={(page) => `/characters/${page}`}
			placeSelf='end'
			colorPalette='brand'
			data-testid='character-pagination'
		>
			<HStack>
				<PaginationPrevTrigger />
				<PaginationItems />
				<PaginationNextTrigger />
			</HStack>
		</PaginationRoot>
	);
};
