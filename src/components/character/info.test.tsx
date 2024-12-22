import { screen, render } from '@/test-utils';
import { Info } from './info';

describe('Info', () => {
	const testProps = {
		image: '/test',
		name: 'Rick Sanchez',
		species: 'Human',
		status: 'Alive',
		gender: 'Male',
		location: 'Earth',
		created: '2017-11-04T18:48:46.250000Z',
	};

	beforeEach(() => {
		render(<Info {...testProps} />);
	});

	it('should render the component correctly', () => {
		expect(screen.getByTestId('character-info')).toBeInTheDocument();
	});

	it('should include the list items', () => {
		expect(screen.getByRole('list').children).toHaveLength(6);

		const expectedContent = [
			['Name', 'Rick Sanchez'],
			['Status', 'Alive'],
			['Species', 'Human'],
			['Gender', 'Male'],
			['Location', 'Earth'],
			['Created', '05/11/2017'],
		];

		const listItems = screen.getAllByRole('listitem');

		expectedContent.forEach(([label, value], index) => {
			expect(listItems[index]).toHaveTextContent(label);
			expect(listItems[index]).toHaveTextContent(value);
		});
	});
});
