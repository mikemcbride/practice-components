import { screen, render, fireEvent } from '@testing-library/vue'
import { describe, it, expect } from 'vitest'
import MyAccordion from '../MyAccordion.vue'

// we'll have a button "label" with the section header text
// and we'll have a section content, probably a section or p tag with the content.
// accordion component will have an internal state of open that's a Boolean.
// when open = true, content shows, otherwise content is hidden.
// state defaults to closed
// todo: could pass a prop to set default open state, but we want the open state to be controlled internally
// question - do we want the developer to be able to control the state from outside the component?
describe('MyAccordion', () => {
    // render the component once.
    const props = {
        labelText: 'My accordion label',
        content: 'This is the paragraph content inside the accordion',
    }
    const { getByText, getByRole, queryByText } = render(MyAccordion, { props })
    const accordionLabel = getByRole('button', { name: 'accordion-label' })

    it('when closed, it displays additional content when the label is clicked', async () => {
        const closedAccordionContent = queryByText(props.content)
        expect(closedAccordionContent).toBeNull()

        // click the button - open the accordion
        await fireEvent.click(accordionLabel)

        const openAccordionContent = getByText(props.content)
        expect(openAccordionContent).toBeTruthy()
    })

    it('when open, it hides additional content when the label is clicked', async () => {
        // since we're using the same component from above, the accordion is already open.
        const openAccordionContent = getByText(props.content)
        expect(openAccordionContent).toBeTruthy()

        // click the button - close the accordion
        await fireEvent.click(accordionLabel)

        const closedAccordionContent = queryByText(props.content)
        expect(closedAccordionContent).toBeNull()
    })
})
