import { useEffect } from "react";
import UseJsonFetch from "./useJsonFetch";

function getData() {
  UseJsonFetch('data').then(d => console.log("[data]: " + d.data));
}

function isLoad() {
  UseJsonFetch('loading').then(d => console.log("[loading]: " + d.loading));
}

function getError() {
  UseJsonFetch('error').then(d => console.log("[error]: " + d.error));
}

function App() {
  useEffect(() => {
    getData();
    isLoad();
    getError();
  }, []);

  return <div></div>;
}

export default App;
