import { Octokit } from "@octokit/core";
import React,{useEffect,useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./pages/Home";
import WatchList from "./pages/WatchList";


let watchlist = localStorage.getItem('watchlist')?JSON.parse(localStorage.getItem('watchlist')):[]


function App() {
  const [data, setData]=useState([])
  const [fullList, setFullList]=useState(watchlist)
  const [checkRenders, setCheckRenders]=useState(false)
  const [checkRepoUpdate, setCheckRepoUpdate]=useState([])
  const [seen, setSeen]=useState(false)


  const octokit = new Octokit({auth:`${process.env.REACT_APP_OKTO_KEY}`});

  useEffect(() => {

      octokit.request('GET /orgs/microsoft/repos', { 
        owner: 'microsoft',
        repo: 'vscode'
      }).then(
        (res) => {
          console.log("resing check update",res.data)
          setData(res.data)
        }
      ).catch(err=>console.log(err))

  }, [])

  const addNewRepo= async (new_addition)=>{

   let fetchLatestUpdate= await octokit.request('GET /repos/{owner}/{repo}/releases', { 
      owner: 'microsoft',
      repo: new_addition.name
    })
    new_addition.updated_at_id = 9988765

    // new_addition.updated_at = fetchLatestUpdate.data[0].id
await setFullList([...fullList, new_addition])
await localStorage.setItem("watchlist", JSON.stringify([...fullList, new_addition, ]))
}

// const clearRepo=(remove_item)=>{
//   console.log("remove_item", remove_item)
//   localStorage.setItem("watchlist", JSON.stringify(fullList.filter(item=>item.id !== remove_item.id)))
//   setFullList(fullList.filter(item=>item.id !== remove_item.id))
//   // localStorage.removeItem(remove_item.name)
//   }





  return (
    <div style={{display: 'flex'}}>
      <Home addNewRepo={addNewRepo} data={data} fullList={fullList} setFullList={setFullList} style={{width:"50%"}}/>
      <WatchList setFullList={setFullList} addNewRepo={addNewRepo} setCheckRenders={setCheckRenders} checkRenders={checkRenders} 
      // clearRepo={clearRepo} 
      seen={seen}
      setSeen={setSeen}
      data={data} fullList={fullList} style={{width:"50%"}}/>
    </div>
  );
}

export default App;
