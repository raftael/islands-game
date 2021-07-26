import React, { Component } from 'react'
import styles from '../styles/Home.module.css'
export default class Square extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 0
        }
    }

    updateSquare() {
        const { xAxis, yAxis } = this.props;
        let newValue = this.state.value === 0 ? 1 : 0

        this.setState({
            value: newValue
        });
        this.props.updateBoard(xAxis,yAxis, newValue)

    }

    render() {
        let backgroundColor = this.state.value === 0 ? 'bg-primary' : 'bg-success';
        return (
            <button className={`${styles.square} ${backgroundColor}`} key={this.props.value} onClick={() => this.updateSquare()}>
                {''}
            </button>
        )
    }
}