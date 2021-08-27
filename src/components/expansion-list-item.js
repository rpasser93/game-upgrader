import { useDispatch } from 'react-redux';
import { addGame } from '../actions/actions';

const ExpansionListItem = ({expansion, hasExp}) => {
  const dispatch = useDispatch();

  const handleAddClick = () => {
    dispatch(addGame(expansion));
  }

  const handleThumbnailClick = () => {
    const bggPage = expansion.bggUrl;
    window.open(`${bggPage}`, '_blank');
  }

  return (
    <div>
      <img src={expansion.thumbnailUrl} alt={expansion.name} className="mx-auto d-block thumbnail-list-image" onClick={handleThumbnailClick}></img>
      <p className="expansion-tn-text">{expansion.name}</p>
      {!hasExp && <button className="btn btn-primary btn-sm" onClick={handleAddClick}>
            Add
        </button>}
        {hasExp && <p className="added-to-shelf"><em>Added to shelf</em></p>}
    </div>
  )
}

export default ExpansionListItem;