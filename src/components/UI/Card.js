import classes from './Card.module.css';

const Card = (props) => {

  const appliedClass =  classes.card + ' ' +  props.className

  return <div className={appliedClass}>{props.children}</div>
};

export default Card;