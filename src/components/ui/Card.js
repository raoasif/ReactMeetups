import classes from './Card.module.css';

function Card(props) {
    return <div className={classes.card}>
        {/* special prop that is default and holds all the contetn which passed in the component between opening and closing  */}
        {props.children}
    </div>
}

export default Card;