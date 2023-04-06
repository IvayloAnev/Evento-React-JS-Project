import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import EventItem from './Events'
import { BrowserRouter } from 'react-router-dom';

describe('Event Item Component', () => {
    test('Show name', () => {
        const name = 'Metalica';

        render(
            <BrowserRouter>
                <EventItem _id={'id'} name={name} />
            </BrowserRouter>
        );

        expect(screen.queryByText(name)).toBeInTheDocument()
    });

    test('Click on details', async () => {
        global.window = { location: { pathname: null } };
        const itemId = 'id';

        render(
            <BrowserRouter>
                <EventItem _id={itemId} />
            </BrowserRouter>
        );

        await userEvent.click(screen.queryByText('Details'));

        expect(global.window.location.pathname).toContain(`/events/${itemId}`);
    });

});