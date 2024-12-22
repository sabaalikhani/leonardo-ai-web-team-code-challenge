import { screen, render } from '@/test-utils';
import { Content } from './content';

describe('Content', () => {
	it('should not render the image if "image" and "name" are falsy', () => {
		render(<Content image='' name='' />);

		expect(screen.queryByTestId('image-container')).toBeNull();
	});

	it('should include the name as alt and text', () => {
		render(<Content image='/test' name='Rick Sanchez' />);

		expect(screen.getByAltText('Rick Sanchez')).toBeInTheDocument();
		expect(
			screen.getByText('Rick Sanchez', { selector: 'span' })
		).toBeInTheDocument();
	});
});
