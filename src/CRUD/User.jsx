import React from "react"
import axios from "axios"
import { useState } from "react"
// import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import { useEffect } from "react"
import style from "./homecrud.module.css"

const Users=()=>{
    let[content,setContent]=useState([]) 
    useEffect(()=>{
        axios.get("http://localhost:3000/employee")
        .then((response)=>{
            // console.log("got the data")
            setContent(response.data)
        })
        .catch(()=>{
            console.log("something went wrong")
        })
    },[])
    let deleteData=(a)=>{
        axios.delete(`http://localhost:3000/employee/${a}`)
        window.location.assign("/comp2")
    }
    
    return(
        <div id={style.homecard}>
       {content.map((x)=>{
        return(
            <div id={style.card}>
              <table>
                <tr>
                    <th colSpan={2}>Employee:{x.id}</th>
                </tr>
                <tr>
                    <td>name</td>
                    <td>:{x.name}</td>
                </tr>
                <tr>
                    <td>salary</td>
                    <td>:{x.salary}</td>
                </tr>
                <tr>
                    <td>company</td>
                    <td>:{x.company}</td>
                </tr>
                <tr>
                    <td><Link to={`/comp3/${x.id}`}>edit</Link></td>
                    <td><button onClick={()=>{deleteData(x.id)}}>delete</button></td>
                </tr>
              </table>
            </div>
        )
       })}
        </div>
    )
}
export default Users