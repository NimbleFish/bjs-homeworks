import { useState } from "react";
import List from "./List";
import Details from "./Details";

export default function App() {
  const [id, chID] = useState();
  
  return (
    <div id="main">
      <div id="list"><List click={chID} /></div>
      <div id="preview"><Details element={id} /></div>
    </div>
  );
}