import { useSelector, useDispatch } from 'react-redux'
import styles from './Cell.module.css'
import { cellActions } from '../../../store/cell';

const Cell = (props) => {
    const dispatch = useDispatch();
    const initialGrid = useSelector(state => state.grid.initialGrid);
    const activeCell = useSelector(state => state.cell.activeCell);
    const [row, col] = useSelector(state => state.cell.selectedCell);
    let isSelected = row === props.row && col === props.col;
    let isInputCell = initialGrid[props.row][props.col] === '.' 
    let isActiveCell = activeCell[0] === props.row && activeCell[1] === props.col

    const selectCellHandler = () => {
        dispatch(cellActions.select([props.row, props.col]))
    }

    const mouseOverHandler = () => {
        dispatch(cellActions.active([props.row, props.col]))
    }

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