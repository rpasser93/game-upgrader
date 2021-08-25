import { useDispatch } from 'react-redux';
import { addGame } from '../actions/actions';

const SearchResultItem = ({result, hasGame}) => {
  const dispatch = useDispatch();

  const handleAddClick = () => {
    dispatch(addGame(result));
  }
  
  return (
    <div className="search-result-game">
      <div className="text-center">
        <img src={result.thumbnailUrl} alt={result.name}></img>
        <p className="search-result-game-name"><strong>{result.name}</strong></p>
        {!hasGame && <button className="btn btn-primary btn-sm" onClick={handleAddClick}>
            Add
        </button>}

        {hasGame && <p><em>Game on shelf</em></p>}
      </div>

    </div>
  )
}

export default SearchResultItem;