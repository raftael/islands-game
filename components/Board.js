import React, { Component } from 'react'
import Square from './Square'
import styles from '../styles/Home.module.css'
import Info from './Info';


export default class Board extends Component {
    constructor(props) {
        super(props);
        this.updateBoard = this.updateBoard.bind(this);
        this.state = {
            board: this.createBoard()
        }
    }

    createBoard() {
        const { width, height } = this.props;
        let board = new Array(width);
        for (var i = 0; i < width; i++) {
            board[i] = new Array(height);
            for (var j = 0; j < height; j++) {
                board[i][j] = null;
            }
        }
        return board;
    }

    updateBoard(i,j,value) {
        const { board } = this.state;
        board[i][j] = value;
        console.log(board);
    }

    renderSquare(i,j) {
        return <Square xAxis={i} yAxis={j} updateBoard={this.updateBoard} />;
    }

    render() {
        const {width, height} = this.props;
        const { board } = this.state;
        console.log(this.state.board);
        
        return (
            <>
            <Info width={width} height={height} islands={0} />
            <div className={styles.board}>
                
                {board.map((items, index) => {
                    return (
                        <div className="row" key={index}>
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
