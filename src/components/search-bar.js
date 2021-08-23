import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {fetchGame} from '../actions/actions';

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

     <form onSubmit = {handleSubmit} >

       <div className="form-group">

         <input className="form-control"
          placeholder="Enter game" onChange={(e) => setSearch(e.target.value)}>

          </input>

       </div>

       <button className="btn btn-primary search-btn" type="submit">
         Submit
       </button>        
     </form>
     <hr></hr>
    </div>
  </div>
  );
}

export default SearchBar;