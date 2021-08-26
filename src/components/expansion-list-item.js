import { useDispatch } from 'react-redux';
import { addGame } from '../actions/actions';

const ExpansionListItem = ({expansion}) => {
  const dispatch = useDispatch();

  const handleAddClick = () => {
    dispatch(addGame(expansion));
  }

  return (
    <div>
      <img src={expansion.thumbnailUrl} alt={expansion.name} className="mx-auto d-block thumbnail-list-image"></img>
      <p>{expansion.name}</p>
      <button className="btn btn-primary btn-sm" onClick={handleAddClick}>
            Add
        </button>
    </div>
  )
}

export default ExpansionListItem;