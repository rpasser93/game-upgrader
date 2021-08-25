import { useSelector } from "react-redux"
import _ from 'lodash';
import SearchResultItem from "./search-result-item";
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { clearResults } from "../actions/actions"
import { BACK_ARROW_IMG } from "../constants";

const SearchResults = () => {
  const results = useSelector(state => state.searchResults);
  const games = useSelector(state => state.games);

  const history = useHistory();
  const dispatch = useDispatch();

  const renderResults = () => {
    if (!_.isEmpty(results)) {
      return results.map((result, index) => {
        let backButton = false;
        let hasGame = _.find(games, {id: result.id});

        if (index % 10 === 0 && index !== 0)
          backButton = true;

        return (
          <div key={result.id} className="col-md-2">
            <SearchResultItem result={result} backButton={backButton} hasGame={hasGame}/>          
          </div>
        )
      });
    }
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
      <div className="row align-items-start">
          {renderResults()}
      </div>
      </div>
    </div>
  )
}

export default SearchResults;