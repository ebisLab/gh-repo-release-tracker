import { Octokit } from "@octokit/core";
import React,{useEffect,useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./pages/Home";
import WatchList from "./pages/WatchList";


export const taskItem = [
  {
    id: 1528817077286,
    added: true
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    added: true
  }
];

let watchlist = localStorage.getItem('watchlist')?JSON.parse(localStorage.getItem('watchlist')):[]


function App() {
  const [data, setData]=useState([])
  const [fullList, setFullList]=useState(watchlist)
  const [sampleList, setSampleList]=useState(taskItem)

  const octokit = new Octokit();

  useEffect(() => {

      octokit.request('GET /repos/{owner}/{repo}/releases', {
        owner: 'microsoft',
        repo: 'vscode'
      }).then(
        (res) => {
          setData(res.data)
        }
      );

  }, [])

  const funadd=(new_addition)=>{

setFullList([...fullList, new_addition])
localStorage.setItem("watchlist", JSON.stringify([...fullList, new_addition]))
}


  const funadd2=(new_addition)=>{
    console.log("yaaay added", new_addition)

setSampleList([...sampleList, new_addition])
// setStoredIds([...storedIds, id])

}




  return (
    <div style={{display: 'flex'}}>
      <Home funadd={funadd} funadd2={funadd2} data={data} fullList={fullList} setFullList={setFullList} style={{width:"50%"}}/>
      <WatchList data={data} fullList={fullList} style={{width:"50%"}}/>
    </div>
  );
}

export default App;
