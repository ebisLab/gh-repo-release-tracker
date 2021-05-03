import React,{useEffect,useState} from 'react';
import { Octokit } from "@octokit/core";

export default function Sample({fullList_name,fullList_owner, latestRelease}) {
    const octokit = new Octokit();
    const [feedback, setFeedback]=useState()

    // useEffect(() => {
    //     if(fullList_owner.length>0 && fullList_name.length>0)
    //     {
    //         octokit.request('GET /repos/{owner}/{repo}/releases/latest', {
    //             owner: fullList_owner,
    //             repo: fullList_name
    //           }).then(res=>console.log("resing",res))

    //     }

    
    //   }, [])

    return (
        <div>
            <h1>Sampleing </h1>
            {/* {console.log("sampleling", fullList)} */}
{fullList_name}            <h1>Latest release</h1>
            {console.log("latest release", fullList_name)}

            
        </div>
    )
}
