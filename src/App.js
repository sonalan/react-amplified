import React, { useEffect, useState } from 'react';
import './App.css';
import { DataStore } from '@aws-amplify/datastore';
import { Contents } from './models';



function App() {

  const [contents, setContents] = useState([])
  useEffect(() => {
    const getData = async () => {
      // Get all of our posts and update state with them
      const contents = await DataStore.query(Contents)
      console.log(contents)
      setContents(contents)
    }
    getData()
  }, [])
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Liste</h1>
        {
          contents.map(content => (
            <div key={content.id}>
              <h2>{content.content_title}</h2>
              <p>{content.content_summary}</p>
            </div>
          ))
        }
      </header>
    </div>
  );
}

export default App;
