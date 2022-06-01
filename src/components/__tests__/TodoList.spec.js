import { render, screen, getByRole } from '@testing-library/vue'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import TodoList from '../TodoList.vue'

// can add items to the list by pressing enter
// can remove items from the list
// can pass in initial list of items (initialItems prop)
describe('TodoList', () => {
    // render the component
    render(TodoList)

    it('can add items to the list by typing in the box and pressing enter', async () => {
        expect(screen.queryAllByText(/apple/).length).toBe(0)
        const todoListInput = screen.getByLabelText('add-todo-input')
        await userEvent.type(todoListInput, 'apple{Enter}')
        expect(screen.queryAllByText(/apple/).length).toBe(1)
    })

    it('can remove items from the list by clicking the X on a list item', async () => {
        const appleTag = screen.getByText('apple')
        const removeTagButton = getByRole(appleTag, 'button')
        await userEvent.click(removeTagButton)
        expect(screen.queryAllByText(/apple/).length).toBe(0)
    })

    it('can accept initialItems props and will render the items', async () => {
        render(TodoList, { props: { initialItems: ['one', 'two', 'three'] } })
        const todoItems = screen.getAllByRole('listitem')
        expect(todoItems.length).toBe(3)
    })
})
