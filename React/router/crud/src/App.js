import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useEffect, useState } from 'react';
import Posts from "./Posts";
import SeePage from "./SeePage";
import NewPost from "./NewPost";

const HOST = 'http://localhost:7777';


function App() {
  const [ data, setData ] = useState(null);
  const updateDataList = () => fetch(HOST+'/posts').then(d => d.json()).then(d => setData(d));
  useEffect(updateDataList, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Posts data={data} update={updateDataList} />} />    
        <Route path="/posts/new" element={<NewPost update={updateDataList} />} />
        <Route path="/posts/:id" element={<SeePage update={updateDataList} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
