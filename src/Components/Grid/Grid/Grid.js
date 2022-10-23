import styles from "./Grid.module.css";
import { Children } from "react";
import Card from "../../UI/Card/Card";
import Cell from "../Cell/Cell";
import Row from "../Row/Row";
import { useSelector } from 'react-redux'
import DifficultyModal from "../../UI/Modal/DifficultyModal/DifficultyModal";
import { Fragment } from "react";

const Grid = (props) => {
  const gridData = useSelector(state => state.grid.workingGrid)
  const difficultyModalActive = useSelector(state => state.grid.difficultyModalActive)

  return (
    <Fragment>
      {difficultyModalActive && <DifficultyModal></DifficultyModal>}
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
