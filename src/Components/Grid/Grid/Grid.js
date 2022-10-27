import styles from "./Grid.module.css";
import Card from "../../UI/Card/Card";
import Cell from "../Cell/Cell";
import Row from "../Row/Row";
import DifficultyModal from "../../UI/Modal/DifficultyModal/DifficultyModal";
import SolvedModal from "../../UI/Modal/SolvedModal/SolvedModal";
import { useSelector, useDispatch,} from "react-redux";
import { Children, Fragment, useEffect } from "react";
import { gridActions } from "../../../store/grid";
import { cellActions } from "../../../store/cell";
import { randomGrid } from "../../../utils/utils";

const MouseTrap = require('mousetrap')

const Grid = () => {
  const dispatch = useDispatch();
  const workingGrid = useSelector(state => state.grid.workingGrid);
  const initialGrid = useSelector(state => state.grid.initialGrid);
  const difficultyModal = useSelector(state => state.grid.difficultyModalActive);
  const isSolved = useSelector(state => state.grid.isSolved);
  const time = useSelector(state => state.grid.time);
  const difficulty = useSelector(state => state.grid.difficulty)
  const [row, col] = useSelector(state => state.cell.selectedCell)

  // Note: Creates initial board
  useEffect(() => {
    if (!isSolved && time === 0) {
      const startGridLogistics = randomGrid(difficulty);
      dispatch(gridActions.newGame(startGridLogistics))
    }    
  }, [isSolved, dispatch, time, difficulty])

  const resetModalHandler = () => {
    dispatch(gridActions.activateDifficultyModal(false));
  };

  const numTrapHandler = (input) => {
    if (row != null && col != null && initialGrid && initialGrid[row][col] === '.') {
      dispatch(gridActions.fillCell([input, [row, col]]))
    }
  }

  const eraseCellTrapHandler = () => {
    dispatch(gridActions.eraseCell([row, col]))
  }

  const moveHandler = (direction) => {
    
    if (row != null && col != null) {
      switch(direction) {
        case 'up':
          if (row - 1 >= 0) {
            dispatch(cellActions.move([row - 1, col]))
          }
          break;
        case 'down':
          if (row + 1 < workingGrid.length) {
            dispatch(cellActions.move([row + 1, col]))
          }
          break;
        case 'left':
          if (col - 1 >= 0) {
            dispatch(cellActions.move([row, col - 1]))
          }
          break;
        case 'right':
          if (col + 1 < workingGrid.length) {
            dispatch(cellActions.move([row, col + 1]))
          }
          break;
        default:
      }
    }
    
  }

  MouseTrap.bind('1', () => numTrapHandler('1'))
  MouseTrap.bind('2', () => numTrapHandler('2'))
  MouseTrap.bind('3', () => numTrapHandler('3'))
  MouseTrap.bind('4', () => numTrapHandler('4'))
  MouseTrap.bind('5', () => numTrapHandler('5'))
  MouseTrap.bind('6', () => numTrapHandler('6'))
  MouseTrap.bind('7', () => numTrapHandler('7'))
  MouseTrap.bind('8', () => numTrapHandler('8'))
  MouseTrap.bind('9', () => numTrapHandler('9'))
  MouseTrap.bind('backspace', () => eraseCellTrapHandler())
  MouseTrap.bind('del', () => eraseCellTrapHandler())

  // Note: Arrow key functionality
  MouseTrap.bind('up', () => moveHandler('up'))
  MouseTrap.bind('left', () => moveHandler('left'))
  MouseTrap.bind('down', () => moveHandler('down'))
  MouseTrap.bind('right', () => moveHandler('right'))

  return (
    <Fragment>
      {difficultyModal && (
        <DifficultyModal onConfirm={resetModalHandler}></DifficultyModal>
      )}
      {isSolved && <SolvedModal></SolvedModal>}

      <Card addStyles={styles.grid}>
        {/* Note: Children.toArray() prevents children require key error  */}
        {Children.toArray(
          [...Array(9)].map((_, row) => {
            return (
              <Row>
                {Children.toArray(
                  [...Array(9)].map((_, col) => {
                    return (
                      <Cell row={row} col={col}>
                        {workingGrid && workingGrid[row][col]}
                      </Cell>
                    );
                  })
                )}
              </Row>
            );
          })
        )}
      </Card>
    </Fragment>
  );
};

export default Grid;
