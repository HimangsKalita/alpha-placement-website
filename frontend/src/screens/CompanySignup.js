import React, { useState } from 'react'
import { Link , useNavigate} from 'react-router-dom'
import Navbar from '../components/Navbar'

export default function CompanySignup() {

    const [credentials, setcredentials] = useState({companyname:"",ownername:"",email:"",password:"",address:"",phone:""})

    let navigate = useNavigate()
    const handleSubmit = async(e)=>{
        e.preventDefault();
        // console.log(JSON.stringify({companyname:credentials.companyname,ownername:credentials.ownername, email:credentials.email, password:credentials.password, address:credentials.address,phone:credentials.phone}))
        const response = await fetch("http://localhost:2000/api/createcompany",{
        method : 'POST',
        headers:{
            'Content-Type':'application/json'
        },
            body:JSON.stringify({companyname:credentials.companyname,ownername:credentials.ownername, email:credentials.email, password:credentials.password, address:credentials.address,phone:credentials.phone})
        });
        const json= await response.json()
        console.log(json)

        if(json.success){
        navigate("/companylogin");
        }

        

        if(!json.success){
            alert("Enter 10 digit phone number")
        }
        


        }
    const onChange=(event)=>{
        setcredentials({...credentials,[event.target.name]:event.target.value})
    }


  return (
    <>
    <div><Navbar/></div>
    <div className="container mt-4">
<form onSubmit={handleSubmit}>
    <div className="mb-3">
    <label htmlFor="companyname" className="form-label">Company Name</label>
    <input type="text" className="form-control" name='companyname' value={credentials.companyname} onChange={onChange} required/>
    </div>
    <div className="mb-3">
    <label htmlFor="ownername" className="form-label">Owner Name</label>
    <input type="text" className="form-control" name='ownername' value={credentials.ownername} onChange={onChange} required/>
    </div>
    <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$" className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" name='email' value={credentials.email} onChange={onChange} required
    />
    </div>
    <div className="mb-3">
    <label htmlFor="exampleInputPassword3"  className="form-label">Password</label>
    <input type="password" className="form-control"  pattern=".{8,}"  autofocus required title="Please enter at least 8 characters" name='password' value={credentials.password} onChange={onChange} id="exampleInputPassword1"/>
    </div>
    {/* <div className="mb-3">
    <label htmlFor="exampleInputPassword3" className="form-label">Confirm Password</label>
    <input type="password" className="form-control" name='confirmpassword' value={credentials.confirmpassword} onChange={onChange} id="exampleInputPassword1"/>
    </div> */}
    <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Address</label>
    <input type="text" className="form-control" name='address' value={credentials.address} onChange={onChange} id="exampleInputPassword1" required/>
    </div>
    <div className="mb-3">
    <label htmlFor="exampleInputPassword1" pattern=".{10,}" className="form-label">Phone Number</label>
    <input type="number" className="form-control" name='phone' value={credentials.phone} onChange={onChange} id="exampleInputPassword1" required/>
    </div>
    <button type="submit" className="btn btn-secondary">Submit</button>
    {/* <Link to="/login" className='m-3 btn btn-secondary'>Already a user</Link>
    <Link to="/createuser" className='m-3 btn btn-secondary'>Signup as user?</Link> */}
</form>
</div>
    </>
  )
}

