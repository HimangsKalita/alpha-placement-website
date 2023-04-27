import React, { useState } from 'react'
import { Link , useNavigate} from 'react-router-dom'
import Navbar from '../components/Navbar'

export default function Signup() {

    const [credentials, setcredentials] = useState({name:"",email:"",password:"",address:"",phone:""})

    let navigate = useNavigate()
    const handleSubmit = async(e)=>{
        e.preventDefault();
        console.log(JSON.stringify({name:credentials.name, email:credentials.email, password:credentials.password,address:credentials.address,phone:credentials.phone}))
        const response = await fetch("http://localhost:5000/api/createuser",{
        method : 'POST',
        headers:{
            'Content-Type':'application/json'
        },
            body:JSON.stringify({name:credentials.name, email:credentials.email, password:credentials.password,address:credentials.address,
            phone:credentials.phone})
        });
        const json= await response.json()
        console.log(json)

        if(json.success){
        navigate("/login");
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
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control" name='name' value={credentials.name} onChange={onChange} required/>
    </div>
    <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    {/* <input type="email" pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$" class="form-control" id="email" placeholder="Enter Email" name="email" required></input> */}

    <input type="email"  pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={credentials.email} onChange={onChange} required
    />
    </div>
    <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" pattern=".{8,}" name='password' value={credentials.password} onChange={onChange} id="exampleInputPassword1" autofocus required title="Please enter at least 8 characters"/> 
    </div>
    <div className="mb-3">
    {/* <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
    <input type="password" className="form-control" pattern=".{8,}" name='confirmpassword' value={credentials.confirmpassword} onChange={onChange} id="exampleInputPassword2" validate required/>  */}
    </div>
    <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Address</label>
    <input type="text" className="form-control" name='address' value={credentials.address} onChange={onChange} id="exampleInputPassword2" required/>
    </div>
    <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Phone Number</label>
    <input type="number" className="form-control" name='phone' pattern=".{10,}" value={credentials.phone} onChange={onChange} id="exampleInputPassword3" required/>
    </div>
    <button type="submit" className="btn btn-secondary">Submit</button>
    {/* <Link to="/login" className='m-3 btn btn-secondary'>Already a user</Link>
    <Link to="/createcompany" className='m-3 btn btn-secondary'>Signup as company?</Link> */}
</form>
</div>
    </>
  )
}

