const ExpansionListItem = ({expansion}) => {
  return (
    <div>
      <img src={expansion.thumbnailUrl} alt={expansion.name} className="mx-auto d-block thumbnail-list-image"></img>
      <p>{expansion.name}</p>
    </div>
  )
}

export default ExpansionListItem;