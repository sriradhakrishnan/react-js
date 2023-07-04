import React from "react";
import  { useNavigate } from "react-router-dom"
import style from "./homecrud.module.css"
import axios from "axios";
import { useState } from "react";
const Createusers=()=>{
    let [name,setName]=useState("")
    let [salary,setSalary]=useState("")
    let[company,setCompany]=useState("")

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
        axios.post("http://localhost:3000/employee",payload)
        .then(()=>{
            console.log("got the data")
        })
        .catch(()=>{
            console.log("something went wrong")
        })
        navigate("/comp2")
    }
    return(
        <section id={style.myform}>
            <form>
                <label htmlFor="">Name</label>
                <input type="text" value={name} onChange={nameData}/>
                <label htmlFor="">salary</label>
                <input type="number" value={salary} onChange={salaryData}/>
                <label htmlFor=""></label>
                <label htmlFor="">company</label>
                <input type="text" value={company} onChange={companyData}/>
                <button onClick={formhandle}>submit</button>
            </form>

        </section>
    )
}
export default Createusers

