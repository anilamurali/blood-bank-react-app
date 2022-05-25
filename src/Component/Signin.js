import React, { useState } from 'react'

const Signin = () => {
    var [username,setUsername]=useState("")
    var [pass,setPass]=useState("")
    const setData=()=>{
        var data={"username":username,"password":pass}
        console.log(data)
    }
  return (
    <div><div class="container">
    <div class="row">
        <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div class="row g-3">
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" class="form-label">Username</label>
                    <input onChange={(e)=>{setUsername(e.target.value)}} type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" class="form-label">Password</label>
                    <input onChange={(e)=>{setPass(e.target.value)}} type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={setData} class="btn btn-primary">SIGN IN</button>
                </div>
            </div>
        </div>
    </div>
</div></div>
  )
}

export default Signin