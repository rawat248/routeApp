import classes from './HighLightedQuote.module.css';

const HighLightedQuote = (props) => {
  return (
    <figure className={classes.quote}>
        <p>{props.text}</p>
        <figcaption>{props.author}</figcaption>

    </figure>
  )
}

export default HighLightedQuote;