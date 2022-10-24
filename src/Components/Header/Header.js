import styles from './Header.module.css'

const Header = (props) => {
    return (
        <div className={styles.header}>
            <div className={styles.title}>Sudoku</div>
            <div className={styles.time}>0:01</div>
        </div>
    )
} 

export default Header;