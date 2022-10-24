import styles from "./Grid.module.css";
import { Children } from "react";
import Card from "../../UI/Card/Card";
import Cell from "../Cell/Cell";
import Row from "../Row/Row";
import { useSelector, useDispatch} from 'react-redux'
import DifficultyModal from "../../UI/Modal/DifficultyModal/DifficultyModal";
import { Fragment } from "react";
import { gridActions } from "../../../store/grid";
import SolvedModal from "../../UI/Modal/SolvedModal/SolvedModal";
import useMouseTrap from 'react-hook-mousetrap'


const Grid = () => {
  const workingGrid = useSelector(state => state.grid.workingGrid)
  const difficultyModalActive = useSelector(state => state.grid.difficultyModalActive)
  const isSolved = useSelector(state => state.grid.isSolved);
  const [row, col] = useSelector(state => state.cell.selectedCell);
  const dispatch = useDispatch();

  const resetModalHandler = () => {
    dispatch(gridActions.activateDifficultyModal(false))
  }
  
  const numTrapHandler = (input) => {
    dispatch(gridActions.fillCell([input, [row, col]]))
  }

  const eraseCellTrapHandler = () => {
    dispatch(gridActions.eraseCell([row, col]))
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
  useMouseTrap('backspace', () => eraseCellTrapHandler())
  useMouseTrap('del', () => eraseCellTrapHandler())

  return (
    <Fragment>
      
      {difficultyModalActive && <DifficultyModal onConfirm={resetModalHandler}></DifficultyModal>}
      {isSolved && <SolvedModal></SolvedModal>}

      <Card addStyles={styles.grid}>
        {/* Note: Children.toArray() prevents children require key error  */}
        {Children.toArray([...Array(9)].map((_, row) => {
      
            return <Row>
              {Children.toArray([...Array(9)].map((_, col) => {
                return (
      
                  <Cell row={row} col={col}>{workingGrid[row][col]}</Cell>
                )
              }))}
            </Row>
      
        })
        )}
      </Card>
    </Fragment>
  );
};

export default Grid;
