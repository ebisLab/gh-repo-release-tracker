import React from 'react'

export default function WatchList({data}) {
    return (
        <div style={{width: '50%'}}>
            <h1>WatchList</h1>
            {data.map(item=><p>{item.name} </p>)}
            
        </div>
    )
}
