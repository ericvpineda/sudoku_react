import styles from './Card.module.css'

const Card = (props) => {
    return (
        <div className={`${styles.card} ${props.addStyles}`}>
            {props.children}
        </div>
    )
}

export default Card; 