import React from 'react'

export default function WatchList({data, fullList,clearRepo}) {
    console.log("FULL LIST", fullList)
    return (
        <div >
            <div style={{position: 'fixed', position: "fixed",
    top: 0,
    bottom: 0,
    overflowY: "scroll",
    overflowx: "hidden",
    width: "50%"}}>
            <h1>WatchList</h1>
            {fullList.map(item=>
            <div key={item.id}>
                <div 
            style={{border:"2px solid green", height:"100px", margin:"10px", padding:"10px"}}
            key={item.id}>
                <div>{item.id}</div>
                <button onClick={()=>clearRepo(item.id)}>Clear</button>

             </div>
            
            <div>

            </div>
            </div>
            )}
            </div>
            
        </div>
    )
}

