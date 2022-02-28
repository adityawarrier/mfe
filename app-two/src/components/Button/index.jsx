import classes from "components/Button/Button.module.scss";

export default function (props) {
  return (
    <button className={classes["button-container"]} onClick={props.onClick}>
      {props.title}
    </button>
  );
}
