import type { ReactNode } from 'react';
import { Box, BoxProps, Container } from '@chakra-ui/react';

type PageWrapperProps = {
    children: ReactNode;
    testId?: string;
} & BoxProps;

export const PageWrapper = ({
    children,
    testId = 'page-wrapper',
    ...restProps
}: PageWrapperProps) => {
    return (
        <Box
            as='main'
            h='var(--main-height)'
            overflow='auto'
            data-testid={testId}
            {...restProps}
        >
            <Container
                p={[4, 6, 8]}
                h='full'
            >
                {children}
            </Container>
        </Box>
    );
};
