
import React from 'react';

function Home({data, fullList, addNewRepo, submitHandler, orgName, changeHandler, orgSetName}) {



  return (
    <div className="App" style={{width:"50%"}}>
      
      <div style={{height:"150px"}}>
      <form onSubmit={submitHandler}>
        <input
        placeholder="Search Organization..."
        type="text"
        value={orgName}
        onChange={changeHandler}
         />
         <button
         className="searchbutton"
         >Search</button>
      </form>
      </div>

      <div>
        {orgSetName && <h1>Searching {orgSetName}'s Organization </h1>}</div>

      
      <div className="app-position">
      {data.map(item=>
    <div 
    style={{border:"1px solid white", width:"100px", height:"100px", margin:"5px", padding:"10px"}}
    key={item.id}>
        <div style={{height:"50%"}}>{item.name}</div>
        <button 
        disabled={fullList.some(stuff=>stuff.id ===item.id)} 
        onClick={()=>addNewRepo({id:item.id, name:item.name, 
          owner:item.owner.login, 
          added:true})}
        > added </button>
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
