import { Octokit } from "@octokit/core";
import React,{useEffect,useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./pages/Home";
import WatchList from "./pages/WatchList";


function App() {
  const [data, setData]=useState([])
  const [fullList, setFullList]=useState([])

  const octokit = new Octokit();


  useEffect(() => {
    // axios.get(`https://api.github.com/repos/ebisLab/md-previewer`)
    // .then(res=>console.log("log",res))

      octokit.request('GET /repos/{owner}/{repo}/releases', {
        owner: 'microsoft',
        repo: 'vscode'
      }).then(
        (res) => {
          console.log("res-->", res.data);
          setData(res.data)
        }
      );

  }, [])




  return (
    <div style={{display: 'flex'}}>
      <Home data={data} fullList={fullList} setFullList={setFullList} style={{width:"50%"}}/>
      <WatchList data={data} fullList={fullList} style={{width:"50%"}}/>
    </div>
    // <div className="App">
    //   <div className="app-position">
    //   {data.map(item=>
    // <div 
    // style={{border:"1px solid white", width:"100px", height:"100px", margin:"5px", padding:"10px"}}
    // onClick={(e)=>addToList(item.id)}
    // key={item.id}>{item.name}</div>
    // )} 
    //   </div>
    // </div>
  );
}

export default App;
