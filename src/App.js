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

  const octokit = new Octokit({auth:`${process.env.REACT_APP_OKTO_KEY}`});

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

  const addNewRepo=(new_addition)=>{

setFullList([...fullList, new_addition])
localStorage.setItem("watchlist", JSON.stringify([...fullList, new_addition]))
}

const clearRepo=(remove_item)=>{
  setFullList(fullList.filter(item=>item.id !== remove_item))
  localStorage.setItem("watchlist", JSON.stringify(fullList.filter(item=>item.id !== remove_item)))
  }





  return (
    <div style={{display: 'flex'}}>
      <Home addNewRepo={addNewRepo} data={data} fullList={fullList} setFullList={setFullList} style={{width:"50%"}}/>
      <WatchList clearRepo={clearRepo} data={data} fullList={fullList} style={{width:"50%"}}/>
    </div>
  );
}

export default App;
