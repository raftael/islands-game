import React from 'react'

import { render as rtlRender, fireEvent, cleanup } from '@testing-library/react'
import Cell from '../components/Cell'
import { GameContextWrapper } from '../context/GameContext';
import "@testing-library/jest-dom/extend-expect";


afterEach(cleanup);

function render(ui, options) {
    function Wrapper(props) {
        return <GameContextWrapper {...props} />
    }
    return rtlRender(ui, { wrapper: Wrapper, ...options });
}

describe('Validating Cell component', () => {
    let getByTestId, rerender
    beforeEach(() => {
        ({ getByTestId, rerender } = render(<Cell i={0} j={0} value={0} />));
    })
    test('Should exist cell button', () => {
        const cell = getByTestId('cell')
        expect(cell).toBeInTheDocument
        expect(cell).toHaveClass('bg-primary')
    })

    test('When the cell is clicked', () => {        
        rerender(<Cell i={0} j={0} value={1} />)        
        const cell = getByTestId('cell')
        expect(cell).toHaveClass('bg-success')

    })
})
