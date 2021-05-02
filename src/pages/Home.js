
import React,{useEffect,useState} from 'react';


function Home({data, fullList, setFullList}) {
  const [add, setAdd]=useState(false)
  const [addIntoList, setAddIntoList]=useState({
      id:'',
      added:false
  })
  const [storedIds, setStoredIds]=useState([])
  
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

  const funadd=(id)=>{
setFullList([...fullList, {id:id, added:true}])
setStoredIds([...storedIds, id])

}

  console.log("added?", add)
  console.log("addinto list", addIntoList)
  console.log("addeding", fullList)
  console.log("storedids",storedIds)

  return (
    <div className="App" style={{width:"50%"}}>
      <div className="app-position">
      {data.map(item=>
    <div 
    style={{border:"1px solid white", width:"100px", height:"100px", margin:"5px", padding:"10px"}}
    onClick={(e)=>addToList(item.id)}
    key={item.id}>
        <div style={{height:"50%"}}>{item.name}</div>
        <button onClick={()=>funadd(item.id)}> addeddd </button>
        <div
        style={{ position: "relative",
        left: "39px",
        top: "27px"}}>
            <input onChange={(e)=>handleChange(item.id)} type="checkbox"/></div>
    </div>
    )} 


   
      </div>

      <div>
        <h1>WATCH LIST</h1>
    {fullList.map(item=>item.id)}
    <h2>Finished List</h2>
      </div>
    </div>
  );
}

export default Home;
