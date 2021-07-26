import React, { Component } from 'react'
import Square from './Square'
import styles from '../styles/Home.module.css'
import Info from './Info';


export default class Grid extends Component {
    constructor(props) {
        super(props);
        this.updateGrid = this.updateGrid.bind(this);
        this.state = {
            grid: this.createGrid(),
            islands: 0
        }
    }

    // create a 2D array 
    createGrid() {
        const { width, height } = this.props;
        let grid = new Array(width);
        for (var i = 0; i < width; i++) {
            grid[i] = new Array(height);
            for (var j = 0; j < height; j++) {
                grid[i][j] = null;
            }
        }
        return grid;
    }

    updateGrid(i, j, value) {
        const { grid } = this.state;
        grid[i][j] = value;
        //TODO: use inmutable js to create a copy 
        const cloneGrid = JSON.parse(JSON.stringify(grid));
        let numIslands = this.getNumIslands(cloneGrid);
        this.setState({ islands: numIslands })
    }

    renderSquare(i, j) {
        return <Square xAxis={i} yAxis={j} updateGrid={this.updateGrid} />;
    }

    getNumIslands = (grid) => {
        let islands = 0;

        //using Depth-first search (DFS) for searching the islands
        const depthFirstSearch = (i, j) => {
            if (i >= 0 && j >= 0 &&
                i < grid.length && j < grid[i].length &&
                grid[i][j] === 1) {
                grid[i][j] = 0;
                depthFirstSearch(i + 1, j); // top
                depthFirstSearch(i, j + 1); // right
                depthFirstSearch(i - 1, j); // bottom
                depthFirstSearch(i, j - 1); // left
            }
        };

        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[i].length; j++) {
                if (grid[i][j] === 1) {
                    islands += 1;
                    depthFirstSearch(i, j);
                }
            }
        }
        return islands;
    };

    render() {
        const { width, height } = this.props;
        const { grid, islands } = this.state;

        return (
            <>
                <Info width={width} height={height} islands={islands} />
                <div className='container-fluid my-5'>
                    {grid.map((items, index) => {
                        return (
                            <div className="row g-0" key={index}>
                                {items.map((subitems, sIndex) => {
                                    return <div className='col' key={sIndex}>{this.renderSquare(index, sIndex)}</div>;
                                })}
                            </div>
                        );
                    })}
                </div>
            </>
        );
    }
}
