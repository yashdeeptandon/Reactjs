import "./Cards.css";

function Card(props) {
  const classes = "card " + props.className; //remember to put white space after the classname as default classnames are seperated with spaces

  return <div className={classes}>{props.children}</div>;
}

export default Card;
