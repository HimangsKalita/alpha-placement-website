import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'

export default function AdminLogin() {

  const [credentials, setcredentials] = useState({email:"",password:""})

  let navigate = useNavigate()

    const handleSubmit = async(e)=>{
        e.preventDefault();
        console.log(JSON.stringify({ email:credentials.email, password:credentials.password,}))
        const response = await fetch("http://localhost:4000/api/adminlogin",{
        method : 'POST',
        headers:{
            'Content-Type':'application/json'
        },
            body:JSON.stringify({email:credentials.email, password:credentials.password})
        });
        const json= await response.json()
        console.log(json)

        if(!json.success){
            alert("Enter valid credentials")
        }
        if(json.success){
            localStorage.setItem("authToken",json.authToken);
            // alert("Logged in");
            navigate("/");
        }

        }
        const onChange=(event)=>{
        setcredentials({...credentials,[event.target.name]:event.target.value})
        }
  return (
    <div>
    <div><Navbar/></div>
      <div className="container mt-4">
<form onSubmit={handleSubmit}>
   
    <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={credentials.email} onChange={onChange}
    />
    </div>
    <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" name='password' value={credentials.password} onChange={onChange} id="exampleInputPassword1"/>
    </div>
    
    <button type="submit" className="btn btn-secondary">Submit</button>
    {/* <Link to="/login" className='m-3 btn btn-secondary'>Login as user</Link> */}
</form>
</div>
    </div>
  )
}
