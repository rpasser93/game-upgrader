const EtsyAdditionItem = ({addition}) => {
  return (
    <div>
      <img src={addition.imgUrl} alt={addition.title} className="mx-auto d-block thumbnail-list-image"></img>
      <p>{addition.title}</p>
    </div>
  )
}

export default EtsyAdditionItem;