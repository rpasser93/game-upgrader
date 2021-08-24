import { useSelector } from "react-redux"
import _ from 'lodash';
import SearchResultItem from "./search-result-item";

const SearchResults = () => {
  const results = useSelector(state => state.searchResults);

  const renderResults = () => {
    if (!_.isEmpty(results)) {
      return results.map((result, index) => {
        let backButton = false;

        if (index % 10 === 0 && index !== 0)
          backButton = true;

        return (
          <div key={result.gameId} className="col-md-3 offset-md-3">
            <SearchResultItem result={result} backButton={backButton}/>          
          </div>
        )
      });
    }
  }

  return (
    <div className="games-list">
      <div className ="col-md-6 offset-3">
      <div className="row align-items-start">
        <h1>Results:</h1>
        {renderResults()}
      </div>
      </div>
    </div>
  )
}

export default SearchResults;