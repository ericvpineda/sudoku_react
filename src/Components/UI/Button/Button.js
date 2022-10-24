import styles from "./Button.module.css";

const Button = (props) => {
  
  return <div onClick={props.onClick} className={`${styles.button} ${props.addStyles}`}>{props.children}</div>;
};

export default Button;
