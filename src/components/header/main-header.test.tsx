import { screen, render } from '@/test-utils'
import { MainHeader } from './main-header'

describe('MainHeader', () => {
    beforeEach(() => {
        render(<MainHeader />)
    })

    it('should render the component correctly', () => {
        expect(screen.getByTestId('main-header')).toBeInTheDocument();
    })

    it('should display the brand name', () => {
        expect(screen.getByText('Rick and Morty')).toBeInTheDocument();
    })

    it('should display the navigation links', () => {
        expect(screen.getByText('Home')).toHaveAttribute('href', '/');
        expect(screen.getByText('Profile')).toHaveAttribute('href', '/profile');
    })
})