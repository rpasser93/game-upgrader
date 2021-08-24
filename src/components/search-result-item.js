import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { BACK_ARROW_IMG } from "../constants";
import {addGame} from '../actions/actions';

const SearchResultItem = ({result, backButton}) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleAddClick = () => {
    dispatch(addGame(result));
  }

  const handleBackClick = () => {
    history.push('/games');
  }

  return (
    <div>
      <div>
        <p>{result.name}</p>
        <img src={result.thumbnailUrl} alt={result.name}></img>
        <button className="btn btn-primary search-btn btn-sm" onClick={handleAddClick}>
            Add to Shelf
        </button>    
      </div>
      
      <div>
      {backButton && <img src={BACK_ARROW_IMG} alt= "" className="back-arrow-image rounded float-end" onClick={handleBackClick}/>}
      </div>

    </div>
  )
}

export default SearchResultItem;