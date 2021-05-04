import React,{useEffect,useState} from 'react'
import { Octokit } from "@octokit/core";

export default function WatchList({data, fullList, addNewRepo, setCheckRenders, setFullList, seen,setSeen}) {
    const octokit = new Octokit({auth:`${process.env.REACT_APP_OKTO_KEY}`});
    const [, setVal]=useState()


    //request to each repo clicked's latest release, 
    //saving the release id in local storage to compare to pinned updated_at key
    const compareData=()=>{
      fullList.map(item=>(
            octokit.request('GET /repos/{owner}/{repo}/releases/latest', {
                owner: item.owner,
                repo: item.name
              }).then(
                (res) => {
                  localStorage.setItem(item.name, JSON.stringify({updated_at_id:res.data.id}))
                }
              ).catch(err=>console.log(err))
              //need proper way to handle error
        ))
    }


    useEffect(() => {
        compareData()
    }, [addNewRepo])

//checking to see if pinned release id matches with local endpoint stored release id in localhost
//when card is clicked, it will update the latest id with the pinned release id
const updateNewId=(update_data,e)=>{

    let existing = localStorage.getItem(`${update_data.name}`)
    existing = existing ? JSON.parse(existing):{}

    let  objIndex = fullList.findIndex((obj => obj.id === update_data.id));
    fullList[objIndex].updated_at_id = existing.updated_at_id

    localStorage.setItem("watchlist", JSON.stringify([...fullList]))
    setSeen(true)
    setVal({})
    
        }

    
//deleting card locally and localstorage
    const clearRepo=(remove_item,e)=>{
        e.preventDefault()
        e.stopPropagation()
        let storage=fullList.filter(item=>item.id !== remove_item.id)
        setFullList(storage)
        setSeen(true)
        localStorage.setItem("watchlist", JSON.stringify(storage))
        localStorage.removeItem(remove_item.name)
        }

        //checks to see if pinned release matches with local storage
    const isIDMatching=(info)=>{
        let existing = localStorage.getItem(`${info.name}`)
        existing = existing ? JSON.parse(existing):{}
        if(existing.updated_at_id === info.updated_at_id){
            return "card"
        }else{
            return "new_update"
        }
    }


    return (
        <div >
    <div style={{position: 'fixed',
    top: 0,
    bottom: 0,
    overflowY: "scroll",
    overflowx: "hidden",
    width: "50%"}}>
            <h1>WatchList</h1>
            {fullList.map(item=>
            <div key={item.id}>
                <div 
                className={isIDMatching(item)}
            style={{ height:"100px", margin:"10px", padding:"10px"}}
            onClick={(e)=>updateNewId(item,e)}
            key={item.id}>
                <div>{item.name}</div>
                <div style={{}}> current update ID: {item.updated_at_id||"No new releases"}</div>
                {/* {item.} */}
                <button onClick={(e)=>clearRepo(item,e)}>Clear</button>
                

             </div>
            
            <div>

            </div>
            </div>
            )}
            </div>
            
        </div>
    )
}

