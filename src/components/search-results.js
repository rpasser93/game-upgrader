import { useSelector } from "react-redux"
import _ from 'lodash';
import SearchResultItem from "./search-result-item";
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { BACK_ARROW_IMG } from "../constants";
import { clearResults } from "../actions/actions"

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
          <div key={result.id} className="col-md-3 offset-md-3">
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
      <div className ="col-md-6 offset-3">
      <img src={BACK_ARROW_IMG} alt= "" className="back-arrow-image" onClick={handleBackClick}/>
      <div className="row align-items-start">
        <h1>Results:</h1>
        {renderResults()}
      </div>
      </div>
    </div>
  )
}

export default SearchResults;