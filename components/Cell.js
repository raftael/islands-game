import styles from '../styles/Home.module.css'
import { useGameContext } from '../context/GameContext';
import { Types } from '../context/GameReducer'

export default function Cell(props) {
    const { dispatch } = useGameContext();
    const backgroundColor = props.value === 0 ? 'bg-primary' : 'bg-success';

    function handleClick() {
        let newValue = props.value === 0 ? 1 : 0
        dispatch({ type: Types.UPDATE_GRID_CELL_VALUE, value: { i: props.i, j: props.j, updatedValue: newValue } })
        dispatch({ type: Types.CALCULATE_ISLANDS });
    }

    return (
        <button className={`${styles.square} ${backgroundColor}`} key={props.value} onClick={handleClick} data-testid="cell">
            &nbsp;
        </button>
    )
}