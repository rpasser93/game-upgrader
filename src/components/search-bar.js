import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {fetchGame, fetchGames} from '../actions/actions';

const SearchBar = () => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    // dispatch(fetchGame(search));
    dispatch(fetchGames(search));
    e.preventDefault();
  }

  return (
    <div className="row">
    <div className="col-md-6 offset-md-3 search-bar">

     <form onSubmit = {handleSubmit} >

       <div className="form-group">

         <input className="form-control list-page-search-bar"
          placeholder="Enter game name" onChange={(e) => setSearch(e.target.value)}>

          </input>

       </div>

       <button className="btn btn-primary search-btn btn-sm" type="submit">
         Add Game
       </button>        
     </form>
     <hr></hr>
    </div>
  </div>
  );
}

export default SearchBar;