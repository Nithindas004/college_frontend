import axios from 'axios'
import React, { useState } from 'react'
import CollegeNav from './CollegeNav'

const AddCollege = () => {
    const [input,setInput]= new useState(
        {
            "collegeName": "",
            "collegePhone": "",
            "place": "",
            "noofstud": ""
        }
    )
    const inputHandler = (event)=>{
        setInput({...input,[event.target.name]:event.target.value})
    }
    const readValues = ()=>{
        axios.post("http://localhost:3001/api/college/add",input).then(
            (response)=>{
                if (response.data.status=="success") {
                    setInput(
                        {
                            "collegeName": "",
                            "collegePhone": "",
                            "place": "",
                            "noofstud": ""
                        }
                    )
                    alert("Successfully Added")
                } else {
                    alert("Something went wrong")
                }
            }
        )
    }
  return (
    <div>
        <CollegeNav/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">College Name</label>
                            <input type="text" className="form-control" name='collegeName' value={input.collegeName} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">College Phone</label>
                            <input type="text" className="form-control" name='collegePhone' value={input.collegePhone} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Place</label>
                            <input type="text" className="form-control" name='place' value={input.place} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Number of students</label>
                            <input type="text" className="form-control" name='noofstud' value={input.noofstud} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-info" onClick={readValues}>ADD</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddCollege