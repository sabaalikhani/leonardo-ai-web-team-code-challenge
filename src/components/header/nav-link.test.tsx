import { screen, render } from '@/test-utils';
import { NavLink } from './nav-link';
import { usePathname } from 'next/navigation';

jest.mock('next/navigation', () => ({
    usePathname: jest.fn(),
}));

describe('NavLink', () => {
    it('should render the component correctly', () => {
        const { container } = render(<NavLink href='/'>Home</NavLink>);

        expect(screen.getByTestId('nav-link')).toBeInTheDocument();
        expect(screen.getByTestId('nav-link')).toHaveAttribute('href', '/');
        expect(container).toMatchSnapshot();
    });

    it('should display the active styles if pathname matches href', () => {
        (usePathname as jest.Mock).mockReturnValue('/');

        const { container } = render(<NavLink href='/'>Home</NavLink>);

        expect(container).toMatchSnapshot();
    })
});