import React, { useState } from 'react'

const Signup = () => {
    var [name,setName]=useState("")
    var [address,setAddress]=useState("")
    var [bgroup,setBloodgroop]=useState("")
    var [mobile,setMobile]=useState("")
    var [username,setUsername]=useState("")
    var [pass,setPass]=useState("")
    const setData=()=>{
        var data={"name":name,"address":address,"bloodgroup":bgroup,"mobile":mobile,"username":username,"password":pass}
        console.log(data)
    }
  return (
    <div><div class="container">
    <div class="row">
        <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div class="row g-3">
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" class="form-label">Name</label>
                    <input onChange={(e)=>{setName(e.target.value)}} type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" class="form-label">Address</label>
                    <input onChange={(e)=>{setAddress(e.target.value)}} type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" class="form-label">Blood Group</label>
                    <input onChange={(e)=>{setBloodgroop(e.target.value)}} type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" class="form-label">Mobile Number</label>
                    <input onChange={(e)=>{setMobile(e.target.value)}} type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" class="form-label">Username</label>
                    <input onChange={(e)=>{setUsername(e.target.value)}} type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" class="form-label">Password</label>
                    <input onChange={(e)=>{setPass(e.target.value)}} type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={setData} class="btn btn-primary">SIGN UP</button>
                </div>
            </div>
        </div>
    </div>
</div></div>
  )
}

export default Signup