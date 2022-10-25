import styles from './Header.module.css'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { gridActions } from '../../store/grid';

const Header = () => {

    const dispatch = useDispatch();
    const difficulty = useSelector(state => state.grid.difficulty)
    const time = useSelector(state => state.grid.time)

    useEffect(() => {
        let id = setInterval(() => {
            dispatch(gridActions.incrementTime())
        }, 10)
        return () => clearInterval(id)
    }, [dispatch])

    return (
        <div className={styles.header}>
            <div className={styles.title}>Sudoku<sup>{difficulty}</sup></div>
            <div className={styles.time}>
                <span> {("0" + Math.floor(((time / 60000) % 600))).slice(-2)}:</span>
                <span>{("0" + Math.floor(((time / 1000) % 60))).slice(-2)}</span>
            </div>
        </div>
    )
} 

export default Header;