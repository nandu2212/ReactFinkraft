import React from "react";
import { useState } from "react";
import {useNavigate} from 'react-router-dom'

const Basecomponent =()=>{
         const[user,setUser]=useState({
            Name:'',
            Email:'',
            Gender:'',
          })
          const Navigate=useNavigate()
          const handlenamechange = (e)=>{
            setUser({...user,Name:e.target.value})
          }
          const handleEmail = (e)=>{
            setUser({...user,Email:e.target.value})
          }
          const handleGender =(e)=>{
            setUser({...user,Gender:e.target.value})
          }
          const handleUserAdd = ()=>{
            Navigate('/grid')
            console.log(user)
          }
          return (
        <>
        <label>UserName</label>
        <input type='text'onChange={handlenamechange} value={user.Name} placeholder='Enter Your UserName'/><br/>
        <label>Email</label>
        <input type='text' onChange={handleEmail} value={user.Email} placeholder='Enter Your Email'/><br/>
        <select onChange={handleGender} value={user.Gender} placeholder='Choose a gender'>
          <option value='male'>male</option>
          <option value='female'>female</option>
          <option value='other'>other</option>
        </select>
        <br/>
        <button onClick={handleUserAdd} >Submit</button>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Gender</th>
                    </tr>
                    <tr>
                        <td>{user.Name}</td>
                        <td>{user.Email}</td>
                        <td>{user.Gender}</td>
                    </tr>
                  
                </table>
        </>
    )

}
export default Basecomponent;