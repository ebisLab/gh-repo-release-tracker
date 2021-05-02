import React from 'react'

export default function WatchList({data, fullList}) {
    console.log("FULL LIST", fullList)
    return (
        <div style={{width: '50%'}}>
            <div style={{position: 'fixed'}}>
            <h1>WatchList</h1>
            {fullList.map(item=><p key={item.id}>{item.id} </p>)}
            </div>
            
        </div>
    )
}
