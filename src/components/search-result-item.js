const SearchResultItem = ({game}) => {
  return (
    <div>
    <p>{game.name}</p>
    <img src={game.thumbnailUrl} alt={game.name}></img>
    </div>
  )
}

export default SearchResultItem;