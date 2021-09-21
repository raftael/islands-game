import React from 'react'

import { render as rtlRender, fireEvent, cleanup } from '@testing-library/react'
import Grid, { createGrid, getIslands } from '../components/Grid'
import { GameContextWrapper } from '../context/GameContext';


afterEach(cleanup);

function render(ui, options) {
    function Wrapper(props) {
        return <GameContextWrapper {...props} />
    }
    return rtlRender(ui, { wrapper: Wrapper, ...options });
}

describe('Validating Grid component', () => {
    test('Should exist grid div', () => {
        const { getByTestId } = render(<Grid />)

        expect(getByTestId('grid')).toBeInTheDocument
    })
})

describe('Validating createGrid function', () => {
    const grid = createGrid(3, 3)
    test('should return a new dimensional array[3][3]', () => {        
        expect(grid).toHaveLength(3)
    });

    test('the value for arr[0][0] should be 0', () => {
        expect(grid[0][0]).toEqual(0);
    })

});

describe('Validating getIslands function', () => {
    const grid = createGrid(3, 3)

    test('should return 1 island', () => {
        grid[0][0] = 1
        const numIslands = getIslands(grid)
        expect(numIslands).toEqual(1)
    });

    test('should return 2 islands', () => {   
        grid[0][0] = 1     
        grid[2][0] = 1
        const numIslands = getIslands(grid)
        expect(numIslands).toEqual(2);
    });

    test('should return 1 island', () => {   
        grid[0][0] = 1
        grid[1][0] = 1     
        grid[2][0] = 1        
        const numIslands = getIslands(grid)
        expect(numIslands).toEqual(1);
    });

});

