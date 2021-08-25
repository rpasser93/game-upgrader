import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {fetchGame} from '../actions/actions';
import {MAG_GLASS_IMG} from '../constants';

const SearchBar = () => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    dispatch(fetchGame(search));
    e.preventDefault();
  }

  return (
    <div className="row">
    <div className="col-md-6 offset-md-3 search-bar">

     <form onSubmit = {handleSubmit}>
       <div className="form-group row">
         <div className="col-md-2">
       <button className="btn search-btn d-flex rounded float-end" type="submit">
         <img src={MAG_GLASS_IMG} alt="" className="magnifying-glass-icon" />
       </button>
       </div>

       <div className="col-md-8">
         <input className="form-control list-page-search-bar"
          placeholder="Enter game name" onChange={(e) => setSearch(e.target.value)}>
          </input>
          </div>

       </div>
     </form>
     <hr></hr>
    </div>
  </div>
  );
}

export default SearchBar;