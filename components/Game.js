import React ,{Component} from 'react'
import Board from './Board'
import styles from '../styles/Home.module.css'

export default class Game extends Component {
    render() {
      return (
        <div className={styles.game}>
          <div className="game-board">
            <Board width={5} height={5} />
          </div>          
        </div>
      );
    }
  }