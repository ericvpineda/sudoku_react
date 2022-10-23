import styles from "./Button.module.css";

const Button = (props) => {
  
  return <div onClick={props.onClick} className={styles.button}>{props.children}</div>;
};

export default Button;
