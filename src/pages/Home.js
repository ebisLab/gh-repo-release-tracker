
import React,{useEffect,useState} from 'react';


function Home({data, fullList, setFullList, addNewRepo}) {
  const [add, setAdd]=useState(false)
  const [disableMe, setDisableMe]=useState()





  return (
    <div className="App" style={{width:"50%"}}>
      <div className="app-position">
      {data.map(item=>
    <div 
    style={{border:"1px solid white", width:"100px", height:"100px", margin:"5px", padding:"10px"}}
    key={item.id}>
        <div style={{height:"50%"}}>{item.name}</div>
        <button 
        disabled={fullList.some(stuff=>stuff.id ===item.id)} 
        onClick={()=>addNewRepo({id:item.id, published_at:item.published_at, added:true})}> addeddd </button>
 <div
        style={{ position: "relative",
        left: "39px",
        top: "27px"}}>
            </div>
    </div>
    )} 


   
      </div>
    </div>
  );
}

export default Home;
