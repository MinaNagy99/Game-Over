import axios from 'axios'
import Joi from 'joi'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
export default function Resgister() {
  const navigate = useNavigate()

  const [userData, setuserData] = useState({
    first_name:'',
    last_name:'',
    email:'',
    password:'', 
    age:''
    })
  const [isLoading, setIsLoading] = useState(false)
  const [Error, setError] = useState('')
  const [ListOfError,setListOfError] = useState([])
    function validationRegisterForm() {
      let scheme =  Joi.object({
        first_name:Joi.string().min(3).max(10).required(),
        last_name:Joi.string().min(3).max(10).required(),
        age:Joi.number().min(16).max(55).required(),
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
    const {data}= await axios.post(`https://route-movies-api.vercel.app/signup`, userData)
    if(data.message=='success'){
     navigate('/login')
   setIsLoading(false)
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
          <p className='fs-2 fw-bold text-center'>create Account</p>
          <form onSubmit={submit}>
    

          <div className="d-flex mt-3">
            
          <input onChange={getUserData} name='first_name'  type="text" placeholder='first name' className='form-control fs-5   btn btn-secondary bg-dark w-50 me-3' />
          <input onChange={getUserData} name='last_name' type="text" placeholder='last name' className='form-control fs-5 btn btn-secondary bg-dark w-50' />

          </div>
          <input onChange={getUserData} name='email' type="text" placeholder='Email' className='form-control fs-5 mt-4  btn btn-secondary bg-dark w-100 me-3' />
          <input onChange={getUserData} name='password' type="password" placeholder='Password' className='form-control fs-5 mt-4  btn btn-secondary bg-dark w-100 me-3' />
          <input onChange={getUserData} name='age' type="text" placeholder='Age' className='form-control fs-5 mt-4  btn btn-secondary bg-dark w-100 me-3' />
            {isLoading&&
                    <button  className='btn border  border-secondary btn-secondary w-100 text-dark fw-bolder mt-4 mb-3 fs-3 bg-info '>Loading ... </button>
                  }
                    {!isLoading&&
                    <button  className='btn border  border-secondary btn-secondary w-100 text-dark fw-bolder mt-4 mb-3 fs-3 bg-info '> sign up </button>
                  }
        {

          ListOfError&&<div className="d-flex flex-column ">
    {ListOfError.map((elm,index)=>
        
          
              <>
            <p key={index} className=' text-start ps-5 text-danger  text-start'>{elm.message}</p>
              </>

           

        )}
         </div>
        }
              {

Error&&<div className="container ">
<div className="row">

  <div className="col-12">
  <p  className=' text-start ps-3 text-danger  text-start'>{Error.split(":")[2]}</p>

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
