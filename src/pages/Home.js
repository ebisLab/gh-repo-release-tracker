import { Octokit } from "@octokit/core";
import React,{useEffect,useState} from 'react';


function Home({data}) {
//   const [data, setData]=useState([])
  const [add, setAdd]=useState(false)
  const [addIntoList, setAddIntoList]=useState({
      id:'',
      added:false
  })
  const [fullList, setFullList]=useState([])

//   const octokit = new Octokit();


//   useEffect(() => {
//     // axios.get(`https://api.github.com/repos/ebisLab/md-previewer`)
//     // .then(res=>console.log("log",res))

//       octokit.request('GET /repos/{owner}/{repo}/releases', {
//         owner: 'microsoft',
//         repo: 'vscode'
//       }).then(
//         (res) => {
//           console.log("res-->", res.data);
//           setData(res.data)
//         }
//       );

//   }, [])

  useEffect(() => {
      if(addIntoList.added ===true){
          fullList.push(addIntoList)
      }
  }, [])
  
  console.log("smoof", data && data.map(item=>item.name))


  let addToList=(id)=>{
    // console.log("id",id)

  }

  const handleChange=(id)=>{
    //   console.log("check?", e.target)
      setAdd(!add)
      setAddIntoList({
          id:id,
          added:!add
      })
  }

  console.log("added?", add)
  console.log("addinto list", addIntoList)
  console.log("addeding", fullList)

  return (
    <div className="App">
      <div className="app-position">
      {data.map(item=>
    <div 
    style={{border:"1px solid white", width:"100px", height:"100px", margin:"5px", padding:"10px"}}
    onClick={(e)=>addToList(item.id)}
    key={item.id}>
        <div style={{height:"50%"}}>{item.name}</div>
        <div
        style={{ position: "relative",
        left: "39px",
        top: "27px"}}>
            <input onChange={(e)=>handleChange(item.id)} type="checkbox"/></div>
    </div>
    )} 
   
      </div>
    </div>
  );
}

export default Home;
