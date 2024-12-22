import userEvent from '@testing-library/user-event';
import { screen, render } from '@/test-utils';
import { Modal } from './modal';


describe('Modal', () => {
    beforeEach(() => {
        render(<Modal content={<div>character content</div>} moreInfo={<div>character more info</div>} />)
    })

    it('should display the character content', () => {
        expect(screen.getByText('character content')).toBeInTheDocument();
    })

    it('should display the character more info upon clicking the trigger', async () => {
        const user = userEvent.setup();

        const trigger = screen.getByTestId('character-modal-trigger');

        await user.click(trigger);

        expect(screen.getByText('character more info')).toBeVisible();
    })
})

