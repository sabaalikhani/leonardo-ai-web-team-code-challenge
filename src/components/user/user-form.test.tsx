import userEvent from '@testing-library/user-event';
import { screen, render } from '@/test-utils';
import { submitUserData } from '@/actions/user';
import { UserForm } from './user-form';

jest.mock('@/actions/user', () => ({
	submitUserData: jest.fn(),
}));

describe('UserForm', () => {
	it('should render the component correctly', () => {
		const { container } = render(<UserForm />);

		expect(screen.getByTestId('user-form')).toBeInTheDocument();
		expect(container).toMatchSnapshot();
	});

	it('should render the form with provided data', () => {
		render(<UserForm data={{ userName: 'John', jobTitle: 'Developer' }} />);

		expect(screen.getByDisplayValue('John')).toBeInTheDocument();
		expect(screen.getByDisplayValue('Developer')).toBeInTheDocument();
	});

	it('should submit the form upon clicking the submit button', async () => {
		const user = userEvent.setup();

		render(<UserForm />);

		await user.type(
			screen.getByRole('textbox', { name: 'User name' }),
			'John'
		);
		await user.type(
			screen.getByRole('textbox', { name: 'Job title' }),
			'Developer'
		);

		await user.click(screen.getByRole('button', { name: 'Submit' }));

		expect(submitUserData).toHaveBeenCalledTimes(1);
	});
});
