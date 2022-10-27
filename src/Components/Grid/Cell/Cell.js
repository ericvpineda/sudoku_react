import { useSelector, useDispatch } from "react-redux";
import styles from "./Cell.module.css";
import { cellActions } from "../../../store/cell";

const Cell = (props) => {
  const dispatch = useDispatch();
  const initialGrid = useSelector((state) => state.grid.initialGrid);
  const activeCell = useSelector((state) => state.cell.activeCell);
  const [row, col] = useSelector((state) => state.cell.selectedCell);

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
        ${row === props.row && col === props.col ? styles.selectedCell : ""}
        ${intialGrid && initialGrid[props.row][props.col] === "." ? styles.inputCell : ""}
        ${activeCell && 
          (activeCell[0] === props.row && activeCell[1] === props.col)
            ? styles.activeCell
            : ""
        }
        `}
    >
      {props.children === "." ? "" : props.children}
    </div>
  );
};

export default Cell;
