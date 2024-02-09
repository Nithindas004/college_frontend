import axios from 'axios'
import React, { useState } from 'react'
import CollegeNav from './CollegeNav'

const SearchCollege = () => {
    const [input,setInput] = new useState(
        {
            "collegeName": ""
        }
    )
    const [data,setData] = new useState([])
    const inputHandler = (event)=>{
        setInput({...input,[event.target.name]:event.target.value})
    }
    const readValues=()=>{
        axios.post("http://localhost:3001/api/college/search",input).then(
            (response)=>{
                setData(response.data)
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
                            <label htmlFor="" className="form-label">Name of College</label>
                            <input type="text" className="form-control" name='collegeName' value={input.collegeName} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-info" onClick={readValues}>Search</button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <table class="table">
  <thead>
  <tr>
      <th scope="col">College Name</th>
      <th scope="col">Phone no.</th>
      <th scope="col">Place</th>
      <th scope="col">Number of students</th>
    </tr>
  </thead>
  <tbody>
    
    {
        data.map(
            (value,index)=>{
                return <tr>
                <th scope="row">{value.collegeName}</th>
                <td>{value.collegePhone}</td>
                <td>{value.place}</td>
                <td>{value.noofstud}</td>
              </tr>
            }
        )
    }
    
  </tbody>
</table>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchCollege