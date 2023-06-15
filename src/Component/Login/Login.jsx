import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Joi from "joi"
export default function Login() {
  const navigate = useNavigate()

  const [userData, setuserData] = useState({
 
    email:'',
    password:'', 
  
    })
  const [isLoading, setIsLoading] = useState(false)
  const [Error, setError] = useState('')
  const [ListOfError,setListOfError] = useState([])
    function validationRegisterForm() {
      let scheme =  Joi.object({
       
        email:Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] }}),
    
        password:Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
        
    
    
    
      })
      return( scheme.validate(userData , {abortEarly : false}))

    }
  function getUserData(e) {
    let copyOfUserData = {...userData}
    copyOfUserData[e.target.name]=e.target.value
    setuserData(copyOfUserData)
  }
  async function sendUserDataToApi() {
    const {data}= await axios.post(`https://route-movies-api.vercel.app/signin`, userData)
    if(data.message=='success'){
     navigate('/')
   setIsLoading(false)
   localStorage.setItem("userToken",data.token);


    }
    else{
       setError(data.message)
       setIsLoading(false)
       setListOfError([])
    }
  
   }
  function submit(e) {

    setIsLoading(true)
    e.preventDefault();
    let validation = validationRegisterForm()
    if (validation.error) {
      setListOfError(validation.error.details)
      setError('')

      setIsLoading(false)

    }else{
    sendUserDataToApi()

    }

  }

  return <>
    <div className="container">
      <div className="row">
        <div className="col-md-6 imgGaming   ">
   

        </div>
        <div className="col-md-6 registrationForm bg-dark rounded-2 p-2">
          <p className='fs-2 my-4 fw-bold text-center'>Sign In</p>
          <form onSubmit={submit}>
    

        
          <input onChange={getUserData} name='email' type="text" placeholder='Email' className='form-control fs-5 my-4  btn btn-secondary bg-dark w-100 me-3' />
          <input onChange={getUserData} name='password' type="password" placeholder='Password' className='form-control fs-5 my-4  btn btn-secondary bg-dark w-100 me-3' />
            {isLoading&&
                    <button  className='btn border  border-secondary btn-secondary w-100 text-dark fw-bolder mt-4 mb-3 fs-3 bg-info '>Loading ... </button>
                  }
                    {!isLoading&&
                    <button  className='btn border  border-secondary btn-secondary w-100 text-dark fw-bolder mt-4 mb-3 fs-3 bg-info '> sign in </button>
                  }
        {

          ListOfError&&<div className="d-flex flex-column ">
    {ListOfError.map((elm,index)=>
        
          
              <>
            <p key={index} className=' text-start ps-3 text-danger  text-start'>{elm.message}</p>
              </>

           

        )}
         </div>
        }
              {

Error&&<div className="container ">
<div className="row">

  <div className="col-12">
  <p  className=' text-start ps-3 text-danger  text-start'>{Error.split(":")[2]|| Error}</p>

  </div>



  </div>
</div>
}
        
        </form>
        </div>
      </div>
    </div>
  </>
}
