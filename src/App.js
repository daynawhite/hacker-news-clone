import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [results, setResults] = useState([]);

  // Getting initial results from the API
  useEffect(() => {

// from AI help (didn't work):
// const instance = axios.create({
//   withCredentials: true,
// });
// instance.get('https://hn.algolia.com/api/v1/items/:id')
//   .then(response => {
//     console.log('Received data:', response.data);
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });

    axios.get
    // ('http://hn.algolia.com/api/v1/items/:id')
    ('http://hn.algolia.com/api/v1/search?query=')
      .then((response) =>
        console.log('data', response.data.hits)
        // setResults(response.data.hits)
        )
  }, [])

  // This will get the user's query
  // const fetchResults = (event) => {
  //   console.log(event.target.value);

    // This will make a more specific request to the API based on the user's query (but it is not DRY, so should probably be put into a function...)
    // axios.get('http://hn.algolia.com/api/v1/search?query=${event.target.value}')
    //   .then((dataReceived) =>
        // console.log('data', dataReceived.data.hits)
  //       setResults(dataReceived.data.hits)
  //       )
  // }

  // Here is what goes on in the GUI
  return (
    <div className="App">

      {/* Here is where the user makes a query
      <form>
        <input onChange={fetchResults} name="search" />
        {/* Add some functionality in order to clear the form, etc */}
      {/* </form> */}

      {/* <ul>
        {results.map((article, idx) => 
          <li key={idx}>
              {/* <a> */}
              {/* {article.title} */}
              {/* </a> */}
            {/* </li> */}
      {/* //   )}
      // </ul> */} 
    </div>
  );
}

export default App;
