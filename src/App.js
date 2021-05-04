import { Octokit } from "@octokit/core";
import React,{useState} from 'react';
import './App.css';
import Home from "./pages/Home";
import WatchList from "./pages/WatchList";


let watchlist = localStorage.getItem('watchlist')?JSON.parse(localStorage.getItem('watchlist')):[]


function App() {
  const [data, setData]=useState([])
  const [orgName, setOrgName]=useState('')
  const [fullList, setFullList]=useState(watchlist)
  const [checkRenders, setCheckRenders]=useState(false)
  const [seen, setSeen]=useState(false)


  const octokit = new Octokit({auth:`${process.env.REACT_APP_OKTO_KEY}`}); 


//adding selected cards into the watchlist panel
  const addNewRepo= async (new_addition)=>{
try{
     let fetchLatestUpdate= await octokit.request('GET /repos/{owner}/{repo}/releases', { 
      owner: new_addition.owner,
      repo: new_addition.name
    })
    console.log("fetching", fetchLatestUpdate)

    console.log("check",fetchLatestUpdate.data[0].id)

    new_addition.updated_at = fetchLatestUpdate.data[0].id
await setFullList([...fullList, new_addition])
await localStorage.setItem("watchlist", JSON.stringify([...fullList, new_addition ]))
}catch(err){
  console.log(err)
}
}

const changeHandler=(e)=>{
  setOrgName(e.target.value)
}

const submitHandler=(e)=>{
  e.preventDefault()
  setOrgName('')
  octokit.request('GET /orgs/{owner}/repos', { 
    owner: orgName,
  }).then(
    (res) => {
      console.log(res.data)
      setData(res.data)
    }
  ).catch(err=>console.log(err))

}





  return (
    <div style={{display: 'flex'}}>
      <Home 
            submitHandler={submitHandler} 
            changeHandler={changeHandler}
      addNewRepo={addNewRepo} 
      data={data} 
      fullList={fullList} 
      setFullList={setFullList} 
      style={{width:"50%"}}/>
      <WatchList 
      setFullList={setFullList} 
      addNewRepo={addNewRepo} 
      setCheckRenders={setCheckRenders} 
      checkRenders={checkRenders} 
      seen={seen}
      setSeen={setSeen}
      data={data} fullList={fullList} style={{width:"50%"}}/>
    </div>
  );
}

export default App;
