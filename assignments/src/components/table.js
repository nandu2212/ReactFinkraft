import React, { useEffect, useState } from "react";
import Axios from 'axios';
const Table =()=>{
    const [data,setData]=useState([]);
    useEffect(()=>{
    Axios.get("https://my-json-server.typicode.com/typicode/demo/posts").then((response)=>{
        const posts=response.data
 setData(posts);
 console.log(data)
    }).catch(err=>{
        console.log(err)
       })
    },[]);
return(
    <>
    <table>
        <tr>
            <th>id</th>
            <th>title</th>
        </tr>
        {
data.map((used)=>{
    return(
        <>
        <tr>
            <td>
                {used.id}
            </td>
            <td>
                {used.title}
            </td>
        </tr>
        </>
    )
})
        }       
    </table>
    </>
)
}

export default Table;