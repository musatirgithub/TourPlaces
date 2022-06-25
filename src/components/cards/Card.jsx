import cardStyle from "./Card.module.scss";

const Card = ({id, title, desc, image}) => {
  return (
    <div className={cardStyle['container']}>
    <h1>{title}</h1>
    <div className={cardStyle['image-div']} >
    <img src={image} alt={title} />
    </div>
    <p>{desc}</p>
    </div>
  )
}

export default Card