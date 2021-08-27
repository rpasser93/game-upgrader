import { useDispatch } from 'react-redux';
import { addGame } from '../actions/actions';

const SearchResultItem = ({result, hasGame}) => {
  const dispatch = useDispatch();

  const handleAddClick = () => {
    dispatch(addGame(result));
  }

  const handleThumbnailClick = () => {
    const bggPage = result.bggUrl;
    window.open(`${bggPage}`, '_blank');
  }

  return (
    <div className="search-result-game-col">
      <div className="text-center">
        <img src={result.thumbnailUrl} alt={result.name} className="search-result-game-thumb" onClick={handleThumbnailClick}></img>
        <p className="search-result-game-name">{result.name}</p>
        {!hasGame && <button className="btn btn-primary btn-sm" onClick={handleAddClick}>
            Add
        </button>}

        {hasGame && <p className="added-to-shelf"><em>Added to shelf</em></p>}
      </div>

    </div>
  )
}

export default SearchResultItem;