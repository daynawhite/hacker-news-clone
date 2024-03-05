import axios from "axios";
import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [results, setResults] = useState([]);

  // Getting initial results from the API
  useEffect(() => {

    axios.get
    // ('https://hn.algolia.com/api/v1/items/:id')
    ('https://hn.algolia.com/api/v1/search?query=')
      .then((res) =>
        // console.log('data', res.data.hits),
        setResults(res.data.hits)
        )
  }, [])

  // This will get the user's query
  const fetchResults = (event) => {
    console.log(event.target.value);

    // This will make a more specific request to the API based on the user's query (but it is not DRY, so should probably be put into a function...)
    axios.get(`https://hn.algolia.com/api/v1/search?query=${event.target.value}`)
      .then((res) =>
        // console.log('data', res.data.hits)
        setResults(res.data.hits)
        )
  }


  // Here is what goes on in the GUI
  return (
    <div className="App">
      <div className="container">
        <header className="heading">
          <img className="H-logo" src="https://hn.algolia.com/public/899d76bbc312122ee66aaaff7f933d13.png" alt=""/>
          <div className="title">
            <p>Search</p>
            <p>Hacker News</p>
          </div>

          <div className="search-container">
            <form >
              <input className="searchBox" onChange={fetchResults} name="search" placeholder="Q  Search stories by title, url, or author"/>
              {/* Possibly add some functionality in order to clear the form, etc */}
            </form>
          </div>
          <img className="gear-icon" src="https://cdn-icons-png.freepik.com/256/2040/2040504.png"/>
        </header>
        <div className="filter-menus">
          <form action="/action_page.php">
            <label for="Stories"> Search </label>
            <select id="stories" name="stories">
              <option value="All">All</option>
              <option value="Stories">Stories</option>
              <option value="Comments">Comments</option>
              <option value="Ask HN">Ask HN</option>
              <option value="Show HN">Show HN</option>
              <option value="Launch HN">Launch HN</option>
              <option value="Jobs">Jobs</option>
              <option value="Polls">Polls</option>
            </select>
            <label for="by"> by </label>
            <select id="by" name="by">
              <option value="Popularity">Popularity</option>
              <option value="Date">Date</option>
            </select>
            <label for="for"> for </label>
            <select id="for" name="for">
              <option value="All time">All time</option>
              <option value="Last 24h">Last 24h</option>
              <option value="Past Week">Past Week</option>
              <option value="Past Month">Past Month</option>
              <option value="Past Year">Past Year</option>
              <option value="Custom Range">Custom Range</option>
            </select>
          </form>
        </div>

        <ul className="listing">
          {results.map((article, idx) => 
            <li  key={idx}>
                <a className="articles" href={article.url}>
                {article.title}
                </a>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;
