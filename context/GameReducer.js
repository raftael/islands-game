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
            return {
                ...state,
                grid: action.grid
            }
        case Types.UPDATE_GRID_CELL_VALUE:
            const { i, j, updatedValue } = action.value
            const updatedArr = state.grid;
            updatedArr[i][j] = updatedValue
            const cloneGrid = cloneDeep(updatedArr);
            return {
                ...state,
                grid: updatedArr,
                islands: getIslands(cloneGrid)
            }
        case Types.UPDATE_GRID_SIZE:
            return {
                ...state,
                width: action.value.width,
                height: action.value.height,
                grid: createGrid(action.value.width, action.value.height),
                islands: 0
            }
        case Types.UPDATE_ISLANDS:
            return {
                ...state,
                islands: action.value
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
    UPDATE_ISLANDS: 'UPDATE_ISLANDS',
}
