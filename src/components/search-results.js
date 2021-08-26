import { useSelector } from "react-redux"
import _ from 'lodash';
import SearchResultItem from "./search-result-item";
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { BACK_ARROW_IMG, LOADING_SPINNER_GIF } from "../constants";
import { clearResults, clearError } from "../actions/actions"

const SearchResults = () => {
  const results = useSelector(state => state.searchResults);
  const games = useSelector(state => state.games);
  const error = useSelector(state => state.errors);

  const history = useHistory();
  const dispatch = useDispatch();

  const handleErrorBackClick = () => {
    history.push('/games');
    dispatch(clearError());
  }

  if (error) {
    return (
      <div>
        <h2 className="text-center error-message-search">{error}</h2>
        <br></br>
        <div className="text-center">
          <button className="btn btn-danger" onClick={handleErrorBackClick}>
            Back to shelf
          </button>
        </div>
      </div>   
    )
  }
  
  const renderResults = () => {
    if (_.isEmpty(results)) {
      return (
      <div className="col-md-8 offset-2">
        <img src={LOADING_SPINNER_GIF} alt='' className="loading-spinner rounded mx-auto d-block"/>
      </div>
      )}

      return results.map((result) => {
        let hasGame = _.find(games, {id: result.id});
        
        return (
          <div key={result.id} className="col-md-2 search-game-container">
            <SearchResultItem result={result} hasGame={hasGame}/>          
          </div>
        )
      });
  }

  const handleBackClick = () => {    
    history.push('/games');
    dispatch(clearResults());
  }

  return (
    <div className="games-list">

      <div className="row text-center card sticky-top">
        <div className ="col-md-6 offset-3">
          <h3 className="search-results-title">Search Results:</h3>
          <h6>Add the appropriate game(s) to your shelf, then click 'Done!' when finished:</h6>
          <div className="row">
            <div className="col-4">
              <img src={BACK_ARROW_IMG} alt= "" className="back-arrow-image back-from-search rounded float-end" onClick={handleBackClick}/>
            </div>
            <div className="col-4">
              <button className="btn btn-danger done-with-search" onClick={handleBackClick}>
                Done!
              </button>
          </div>
        </div>
        </div>
      </div>

      <div className="col-md-10 offset-1">
      <div className="row align-items-end">
          {renderResults()}
      </div>
      </div>
    </div>
  )
}

export default SearchResults;