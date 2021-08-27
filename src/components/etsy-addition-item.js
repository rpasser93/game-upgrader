const EtsyAdditionItem = ({addition}) => {

  const etsyUrl = `https://www.etsy.com/listing/${addition.id}`

  const handleThumbnailClick = () => {
    window.open(`${etsyUrl}`, '_blank');
  }

  return (
    <div>
      <img src={addition.imgUrl} alt={addition.title} className="mx-auto d-block thumbnail-list-image" onClick={handleThumbnailClick}></img>
      <p className="etsy-tn-text text-decoration-underline" onClick={handleThumbnailClick}>{addition.title}</p>
    </div>
  )
}

export default EtsyAdditionItem;