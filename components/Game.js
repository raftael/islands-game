import React ,{Component} from 'react'
import Grid from './Grid'
import styles from '../styles/Home.module.css'

export default class Game extends Component {
    render() {
      return (
        <div>
            <Grid width={5} height={5} />
        </div>
      );
    }
  }