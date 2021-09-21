import { createGrid, getIslands } from '../components/Grid'
import { cloneDeep } from 'lodash'

export const initialState = {
    islands: 0,
    width: 5,
    height: 5,
    grid: createGrid(5, 5)
}

export const GameReducer = (state, action) => {
    switch (action.type) {
        case Types.CREATE_GRID:
        case Types.UPDATE_GRID:
            console.log('action: CREATE_GRID/UPDATE_GRID')
            return {
                ...state,
                grid: action.grid
            }
        case Types.UPDATE_GRID_CELL_VALUE:
            console.log('action: UPDATE_GRID_CELL_VALUE value: ' + action.value.updatedValue )
            const { i, j, updatedValue } = action.value            
            state.grid[i][j] = updatedValue            
            return {
                ...state,
                grid: state.grid,                
            }
        case Types.UPDATE_GRID_SIZE:
            console.log('action: UPDATE_GRID_SIZE')
            return {
                ...state,
                width: action.value.width,
                height: action.value.height,
                grid: createGrid(action.value.width, action.value.height),
                islands: 0
            }
        case Types.CALCULATE_ISLANDS:
            console.log('action: CALCULATE_ISLANDS')            
            const cloneGrid = cloneDeep(state.grid);
            return {
                ...state,
                islands: getIslands(cloneGrid)
            }
        default:
            return state;
    }
};

export const Types = {
    CREATE_GRID: 'CREATE_GRID',
    UPDATE_GRID: 'UPDATE_GRID',
    UPDATE_GRID_SIZE: 'UPDATE_GRID_SIZE',
    UPDATE_GRID_CELL_VALUE: 'UPDATE_GRID_CELL_VALUE',
    CALCULATE_ISLANDS: 'CALCULATE_ISLANDS',
}
