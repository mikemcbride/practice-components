import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/vue'
import userEvent from '@testing-library/user-event'
import DropdownMenu from '../DropdownMenu.vue'

// it will have a button that we use to toggle open/closed
// it will have event listeners for ESC and click to close dropdown if ESC is pressed
// or if we click outside the target area.
// really we're testing that clicking the button opens/closes the dropdown,
// and that if the dropdown is open, we close it with an ESC key press or a click outside the target.
describe('DropdownMenu', async () => {
    // initial render of the dropdown menu
    // to start, we won't pass in anything into the slots - we'll render an empty list
    render(DropdownMenu)
    async function clickMenuButton() {
        const menuButton = screen.getByRole('button')
        await userEvent.click(menuButton)
    }

    it('opens when you click the menu button', async () => {
        await clickMenuButton()
        expect(screen.getByTestId('dropdown-list')).toBeTruthy() // it should be present in the DOM
    })

    it('closes when you click the menu button and the dropdown is open', async () => {
        // menu starts open from the last test...
        await clickMenuButton()
        expect(screen.queryByTestId('dropdown-list')).toBeNull() // queryBy... returns null if not found
    })

    it('closes when you press ESC key and the dropdown is open', async () => {
        // reopen the menu
        await clickMenuButton()
        await userEvent.keyboard('{Escape}')
        expect(screen.queryByTestId('dropdown-list')).toBeNull()
    })

    it('closes when you click outside the dropdown and the dropdown is open', async () => {
        // reopen the menu
        await clickMenuButton()
        await userEvent.click(document.body) // click on the body - just needs to be outside of the dropdown
        expect(screen.queryByTestId('dropdown-list')).toBeNull()
    })
})
