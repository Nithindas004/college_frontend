import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CollegeNav from './CollegeNav'

const ViewCollege = () => {
    const [data,setData] = new useState([])
    const getData =()=>{
        axios.get("http://localhost:3001/api/college/view").then(
            (response)=>{
                setData(response.data)
            }
        )
    }
    useEffect(()=>{getData()},[])
  return (
    <div>
        <CollegeNav/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                <table className="table">
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
                <td>{value.collegeName}</td>
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
  )
}

export default ViewCollege