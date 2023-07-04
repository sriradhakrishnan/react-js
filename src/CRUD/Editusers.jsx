import React from "react"
import style from "./homecrud.module.css"
import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
const Editusers=()=>{
    let[name,setName]=useState("")
    let[salary,setSalary]=useState("")
    let[company,setCompany]=useState("")

    let {xyz}=useParams()
    console.log(xyz)

 
    useEffect(()=>{
        axios.get(`http://localhost:3000/employee/${xyz}`)
        .then((response)=>{
            setName(response.data.name)
            setSalary(response.data.salary)
            setCompany(response.data.company)
           
        })
        .catch(()=>{
            console.log("something went wrong")
        })
      
    },[])
 
   let nameData=(x)=>{
    setName(x.target.value)
   }
   let salaryData=(x)=>{
    setSalary(x.target.value)
   }
   let companyData=(x)=>{
    setCompany(x.target.value)
   }
   let navigate=useNavigate()
   let formhandle=(e)=>{
    e.preventDefault()
   let payload={name,salary,company}
    axios.put(`http://localhost:3000/employee/${xyz}`,payload)
    .then(()=>{
        console.log("got the data")
    })
    .catch(()=>{
        console.log("something went wrong")
    })
    navigate("/comp2")
   }
       return(
        <div id={style.myform}>
        <form>
            <label htmlFor="">name</label>
            <input type="text" value={name} onChange={nameData}/>
            <label htmlFor="">salary</label>
            <input type="number" value={salary} onChange={salaryData}/>
            <label htmlFor="">company</label>
            <input type="text" value={company} onChange={companyData}/>
            <button onClick={formhandle}>update</button>
        </form>
        </div>
    )
}
export default Editusers