import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { BACK_ARROW_IMG } from "../constants";
import { addGame, clearResults } from '../actions/actions';

const SearchResultItem = ({result, backButton, hasGame}) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleAddClick = () => {
    dispatch(addGame(result));
  }

  const handleBackClick = () => {
    history.push('/games');
    dispatch(clearResults());
  }

  return (
    <div>
      <div>
        <p><strong>{result.name}</strong></p>
        <img src={result.thumbnailUrl} alt={result.name}></img>
        {!hasGame && <button className="btn btn-primary search-btn btn-sm" onClick={handleAddClick}>
            Add to Shelf
        </button>}

        {hasGame && <p><em>Game on shelf</em></p>}
      </div>
      
      <div>
      {backButton && <img src={BACK_ARROW_IMG} alt= "" className="back-arrow-image rounded float-end" onClick={handleBackClick}/>}
      </div>

    </div>
  )
}

export default SearchResultItem;