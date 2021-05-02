
import React,{useEffect,useState} from 'react';


function Home({data, fullList, setFullList, funadd, funadd2}) {
  const [add, setAdd]=useState(false)
  const [disableMe, setDisableMe]=useState()


  const jalla=()=>{
    console.log("wanted to see")
    // console.log(fullList.map(item=>item.id===id))
    // if(fullList.map(item=>item.id===id)){


    // }
  }
  let addToList=(id)=>{
    // console.log("id",id)

  }

  useEffect((id) => {
    // if(fullList.map(item=>item.id===id))
    jalla()


  }, [])

  // const handleChange=(id)=>{
  //   //   console.log("check?", e.target)
  //     setAdd(!add)
  //     setAddIntoList({
  //         id:id,
  //         added:!add
  //     })
  // }


  const submity=(e,id)=>{
    e.preventDefault()

    console.log("id", id)
    // if(!newinfo)return;
    funadd2({
      id:id, added:true
    })
    console.log("this got to workd")

  }



  return (
    <div className="App" style={{width:"50%"}}>
      <div className="app-position">
      {data.map(item=>
    <div 
    style={{border:"1px solid white", width:"100px", height:"100px", margin:"5px", padding:"10px"}}
    onClick={(e)=>addToList(item.id)}
    key={item.id}>
        <div style={{height:"50%"}}>{item.name}</div>
        <button 
        disabled={fullList.some(stuff=>stuff.id ===item.id)} 
        onClick={()=>funadd({id:item.id, published_at:item.published_at, added:true})}> addeddd </button>
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
