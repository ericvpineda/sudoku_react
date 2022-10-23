import { useSelector, useDispatch } from 'react-redux'
import styles from './Cell.module.css'
import cell, { cellActions } from '../../../store/cell';
import { gridActions } from "../../../store/grid";
import useMouseTrap from 'react-hook-mousetrap'

const Cell = (props) => {
    const dispatch = useDispatch();
    const selectedCell = useSelector(state => state.cell.selectedCell);
    const initialGrid = useSelector(state => state.grid.initialGrid);
    const activeCell = useSelector(state => state.cell.activeCell);
    const isSelected = selectedCell[0] === props.row && selectedCell[1] === props.col;
    const isInputCell = initialGrid[props.row][props.col] === '.' 
    const isActiveCell = activeCell[0] === props.row && activeCell[1] === props.col

    const selectCellHandler = () => {
        dispatch(cellActions.select([props.row, props.col]))
    }

    const numTrapHandler = (input) => {
        dispatch(gridActions.fillCell([input, selectedCell]))
    }

    const mouseOverHandler = () => {
        dispatch(cellActions.active([props.row, props.col]))
    }

    // Note: Need mousetrap fxns here due to row and col requirement
    useMouseTrap('1', () => numTrapHandler('1'))
    useMouseTrap('2', () => numTrapHandler('2'))
    useMouseTrap('3', () => numTrapHandler('3'))
    useMouseTrap('4', () => numTrapHandler('4'))
    useMouseTrap('5', () => numTrapHandler('5'))
    useMouseTrap('6', () => numTrapHandler('6'))
    useMouseTrap('7', () => numTrapHandler('7'))
    useMouseTrap('8', () => numTrapHandler('8'))
    useMouseTrap('9', () => numTrapHandler('9'))

    const allStyles = `${styles.cell} 
        ${isSelected ? styles.selectedCell : '' }
        ${isInputCell && !isSelected ? styles.inputCell : ''}
        ${isActiveCell && !isSelected ? styles.activeCell : ''}
        `

    return (
        <div onMouseOver={mouseOverHandler} onClick={selectCellHandler} className={allStyles}>
            {props.children === '.' ? '' : props.children}
        </div>
    )
}

export default Cell;