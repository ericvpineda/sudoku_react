import Card from "../../UI/Card/Card";
import { Children } from "react";
import Number from "../Number/Number";
import styles from './NumPad.module.css'

const NumPad = () => {
    return (
        <Card addStyles={styles.numpad}> 
            {Children.toArray([...Array(9)].map((_, num) => {
                return (<Number>{num + 1}</Number>)
            }))}
        </Card>
    )
}

export default NumPad;