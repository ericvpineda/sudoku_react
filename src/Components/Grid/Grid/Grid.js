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

const Grid = (props) => {
  const gridData = useSelector(state => state.grid.workingGrid)
  const difficultyModalActive = useSelector(state => state.grid.difficultyModalActive)
  const isSolved = useSelector(state => state.grid.isSolved);
  const dispatch = useDispatch();

  const resetModalHandler = () => {
    dispatch(gridActions.activateDifficultyModal(false))
  }

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
      
                  <Cell row={row} col={col}>{gridData[row][col]}</Cell>
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
