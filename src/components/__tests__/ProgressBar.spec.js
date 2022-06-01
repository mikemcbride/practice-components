import { render } from '@testing-library/vue'
import { describe, it, expect } from 'vitest'
import ProgressBar from '../ProgressBar.vue'

// progress bar changes color based on percentage full
// 0-25 = red
// 25-50 = yellow
// 50-100 = green
// takes a single prop
describe('ProgressBar', () => {
    // render the component once.
    const props = {
        value: 10,
    }
    const { getByTestId, rerender } = render(ProgressBar, { props })

    it('when value is less than 25, progress bar color is red', async () => {
        const bar = getByTestId('progress-bar')
        expect(bar.className.includes('red')).toBeTruthy()
    })

    it('when value is greater than 25 and up to 50 (including 50) progress bar is yellow', async () => {
        await rerender({ value: 35 })
        const bar = getByTestId('progress-bar')
        expect(bar.className.includes('yellow')).toBeTruthy()
    })

    it('when value is above 50 the progress bar color is green', async () => {
        await rerender({ value: 60 })
        const bar = getByTestId('progress-bar')
        expect(bar.className.includes('green')).toBeTruthy()
    })
})
