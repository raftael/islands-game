import React from 'react'
import Cell from './Cell'
import Info from './Info';
import { useGameContext } from '../context/GameContext';

export default function Grid() {
    const { state } = useGameContext();
    const { width, height, grid, islands } = state;

    function renderCell(i, j, subitem) {
        return <Cell i={i} j={j} value={subitem} />;
    }

    return (
        <>
            <Info width={width} height={height} islands={islands} />
            <div className='container-fluid my-5' data-testid="grid">
                {grid.map((items, index) => {
                    return (
                        <div className="row g-0" key={index}>
                            {items.map((subitem, sIndex) => {
                                return <div className='col' key={sIndex}>{renderCell(index, sIndex, subitem)}</div>;
                            })}
                        </div>
                    );
                })}
            </div>
        </>
    )

}

export function getIslands(cloneGrid) {
    let numIslands = 0;

    //using Depth-first search (DFS) for searching the islands
    const depthFirstSearch = (i, j) => {
        if (i >= 0 && j >= 0 &&
            i < cloneGrid.length && j < cloneGrid[i].length &&
            cloneGrid[i][j] === 1) {
            cloneGrid[i][j] = 0;
            depthFirstSearch(i + 1, j); // top
            depthFirstSearch(i, j + 1); // right
            depthFirstSearch(i - 1, j); // bottom
            depthFirstSearch(i, j - 1); // left
        }
    };

    for (let i = 0; i < cloneGrid.length; i++) {
        for (let j = 0; j < cloneGrid[i].length; j++) {
            if (cloneGrid[i][j] === 1) {
                numIslands += 1;
                depthFirstSearch(i, j);
            }
        }
    }
    return numIslands;
}

export function createGrid(width, height) {
    const newGrid = new Array(height);
    for (var i = 0; i < height; i++) {
        newGrid[i] = new Array(width);
        for (var j = 0; j < width; j++) {
            newGrid[i][j] = 0;
        }
    }
    return newGrid;
}
