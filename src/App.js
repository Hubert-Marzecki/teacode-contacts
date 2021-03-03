import logo from './logo.svg';
import './App.css';
import List from './components/List'
import Loading from './components/Loading'
import { useEffect, useState } from 'react';
import axios from 'axios'


function App() {

  useEffect(() => {
    fetchData("https://teacode-recruitment-challenge.s3.eu-central-1.amazonaws.com/users.json");
    },[]) 
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);


async function fetchData(url) {
  try {
    const response = await axios.get(url);
    setData(response.data);
    setIsLoaded(true);
  }
  catch (e) {
      console.log(e);
  }
}


  return (
    <div className="App">
          <div className="container  mt-5">
         {isLoaded ?<List items={data}/> : <Loading /> }
          </div>
    </div>
  );
}

export default App;
