import React,{useEffect,useState} from 'react';
import { Octokit } from "@octokit/core";

export default function Repo({item,fullList,addNewRepo,releaseNewInfo}) {
    const octokit = new Octokit();

    // useEffect(() => {
    //     octokit.request('GET /repos/{owner}/{repo}/releases/latest', {
    //         owner: item.owner,
    //         repo: item.name
    //       }).then(res=>console.log("INSIDE REPO",res))
    //       .catch(err=>console.log(err))
    
    //   }, [])

    console.log("itttt", fullList)
    console.log("INSIDE REPO", item)



    return (
        <div 
        style={{border:"1px solid white", width:"100px", height:"100px", margin:"5px", padding:"10px"}}
        key={item.id}>
            <div style={{height:"50%"}}>{item.name}</div>
            <button 
            disabled={fullList.some(stuff=>stuff.id ===item.id)} 
            onClick={()=>addNewRepo({id:item.id, name:item.name, owner:item.owner.login, updated_at:item.updated_at, published_at:item.published_at, added:true})}> addeddd </button>
     <div
            style={{ position: "relative",
            left: "39px",
            top: "27px"}}>
                </div>
        </div>
    )
}
