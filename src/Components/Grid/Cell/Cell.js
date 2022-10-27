import { useSelector, useDispatch } from "react-redux";
import styles from "./Cell.module.css";
import { cellActions } from "../../../store/cell";

const Cell = (props) => {
  const dispatch = useDispatch();
  const initialGrid = useSelector((state) => state.grid.initialGrid);
  const activeCell = useSelector((state) => state.cell.activeCell);
  const [row, col] = useSelector((state) => state.cell.selectedCell);
  const workingGrid = useSelector((state) => state.grid.workingGrid);
  const value = workingGrid.length > 0 ? workingGrid[props.row][props.col] : '';
  const isInputCell = initialGrid.length > 0 && initialGrid[props.row][props.col] === ".";
  const isActiveCell = activeCell.length > 0 && activeCell[0] === props.row && activeCell[1] === props.col;
  const isSelectedCell = row === props.row && col === props.col;

  const selectCellHandler = () => {
    dispatch(cellActions.select([props.row, props.col]));
  };

  const mouseOverHandler = () => {
    dispatch(cellActions.active([props.row, props.col]));
  };

  return (
    <div
      onMouseOver={mouseOverHandler}
      onClick={selectCellHandler}
      className={`${styles.cell} 
        ${isSelectedCell ? styles.selectedCell : ""}
        ${isInputCell ? styles.inputCell : ""}
        ${isActiveCell ? styles.activeCell : ""}
        `}
    >
      {value === "." ? "" : value}
    </div>
  );
};

export default Cell;
