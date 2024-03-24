import './index.css'

const TourItem = props => {
  const {item} = props
  const {name, description, imageUrl} = item
  return (
    <li className="item">
      <img src={imageUrl} alt={name} className="img" />
      <h1>{name}</h1>
      <p>{description}</p>
    </li>
  )
}

export default TourItem
