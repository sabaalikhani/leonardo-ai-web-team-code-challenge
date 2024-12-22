import { screen, render } from '@/test-utils'
import { Pagination } from './pagination'

describe('Pagination', () => {
    it('should render the component correctly', () => {
        render(<Pagination currentPage={1} totalPages={10} />)

        expect(screen.getByTestId('character-pagination')).toBeInTheDocument();
    })

    //TODO: Add more unit tests
})