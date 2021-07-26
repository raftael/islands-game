import React, { PureComponent } from 'react'
import Cell from './Cell'
import Info from './Info';


export default class Grid extends PureComponent {
    constructor(props) {        
        super(props);
        this.updateGrid = this.updateGrid.bind(this);
        this.updateGridSize = this.updateGridSize.bind(this);
        this.state = {
            grid: this.createGrid(),
            islands: 0,
            width: props.width,
            height: props.height,
        }

    }

    // create a 2D array 
    createGrid() {        
        const { width, height } = this.props;
        
        const grid = new Array(height);
        for (var i = 0; i < height; i++) {
            grid[i] = new Array(width);
            for (var j = 0; j < width; j++) {
                grid[i][j] = 0;
            }
        }
        return grid;    
    }

    updateGrid(i, j, value) {
        const { grid } = this.state;
        grid[i][j] = value;
        //TODO: use inmutable js to create a copy 
        const cloneGrid = JSON.parse(JSON.stringify(grid));
        let numIslands = this.getIslands(cloneGrid);
        this.setState({ islands: numIslands })
    }

    renderCell(i, j, subitem) {
        return <Cell xAxis={i} yAxis={j} value={subitem} updateGrid={this.updateGrid} />;
    }

    getIslands = (grid) => {
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

    // update grid size (width, height)
    updateGridSize(x, y) {
        this.props.updateGame(x, y)
        setTimeout(() => {
            this.setState({
                grid: this.createGrid(),
                islands: 0
            })
        }, 1000);
    }

    render() {
        const { grid, islands, } = this.state;
        const { width, height } = this.props;
        return (
            <>
                <Info width={width} height={height} islands={islands} updateGridSize={this.updateGridSize} />
                <div className='container-fluid my-5'>
                    {grid.map((items, index) => {
                        return (
                            <div className="row g-0" key={index}>
                                {items.map((subitem, sIndex) => {
                                    return <div className='col' key={sIndex}>{this.renderCell(index, sIndex, subitem)}</div>;
                                })}
                            </div>
                        );
                    })}
                </div>
            </>
        );
    }
}
