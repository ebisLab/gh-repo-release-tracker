import React,{useEffect,useState} from 'react'
import { Octokit } from "@octokit/core";

export default function WatchList({data, fullList, addNewRepo, setCheckRenders, setFullList, seen,setSeen}) {
    const octokit = new Octokit({auth:`${process.env.REACT_APP_OKTO_KEY}`});
    const [val, setVal]=useState()
    const [repoData, setRepoData]=useState()
    // const [seen, setSeen]=useState(false)


    const compareData=()=>{
      fullList.map(item=>(
            octokit.request('GET /repos/{owner}/{repo}/releases/latest', {
                owner: item.owner,
                repo: item.name
              }).then(
                (res) => {
                  setRepoData({name:item.name, updated_at_id:res.data.id})
                  localStorage.setItem(item.name, JSON.stringify({updated_at_id:res.data.id}))
                }
              ).catch(err=>console.log(err))
        ))
    }


    useEffect(() => {
        compareData()
    }, [addNewRepo,seen])


const updateNewId=(update_data,e)=>{

    let existing = localStorage.getItem(`${update_data.name}`)
    existing = existing ? JSON.parse(existing):{}

    let  objIndex = fullList.findIndex((obj => obj.id === update_data.id));
    fullList[objIndex].updated_at_id = existing.updated_at_id

    localStorage.setItem("watchlist", JSON.stringify([...fullList]))
    setSeen(true)
    setVal({})
    
        }

    

    const clearRepo=(remove_item,e)=>{
        e.preventDefault()
        e.stopPropagation()
        let storage=fullList.filter(item=>item.id !== remove_item.id)
        setFullList(storage)
        setSeen(true)
        localStorage.setItem("watchlist", JSON.stringify(storage))
        localStorage.removeItem(remove_item.name)
        }

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
                className={isIDMatching(item)}
            style={{ height:"100px", margin:"10px", padding:"10px"}}
            onClick={(e)=>updateNewId(item,e)}
            key={item.id}>
                <div>{item.name}</div>
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

