import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {MAG_GLASS_IMG} from '../constants';
import { useHistory } from 'react-router';
import {fetchGames} from '../actions/actions';

const SearchBar = () => {
  const [search, setSearch] = useState('');
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = (e) => {
    setSearch(e.target.value);
    setInputValue(e.target.value);
  }

  const handleSubmit = (e) => {
    dispatch(fetchGames(search));
    setInputValue('');
    e.preventDefault();
    history.push('/results');
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
          placeholder="Enter game name" onChange={handleChange} value={inputValue}>
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