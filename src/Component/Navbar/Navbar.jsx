import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Navbar() {
  let navigate = useNavigate()
  const [isLogin, setisLogin] = useState(false)


  function logOut() {
    localStorage.removeItem('userToken')
    navigate('/login')
  }

  
  return <>
  <nav className="navbar navbar-expand-lg bg-light">
  <div className="container">
    <a className="navbar-brand " href="#">
      <div className="logo-img"></div>
  

    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
     
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    
 {  localStorage.getItem('userToken') &&<>  <li className="nav-item">
        <Link className="nav-link" to="">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="all">All</Link>
      </li>
      
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Platforms
        </a>
        <ul className="dropdown-menu">

        <li><Link className="dropdown-item" to='platform/pc'>pc</Link></li>
        <li><Link className="dropdown-item" to='platform/browser'>Browser</Link></li>

          <li><hr className="dropdown-divider"/></li>
        </ul>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Sort By
        </a>
        <ul className="dropdown-menu">
        <li><Link className="dropdown-item" to='sortedBy/release-data'>Release Data</Link></li>
        <li><Link className="dropdown-item" to='sortedBy/popularity'>Popularity</Link></li>
        <li><Link className="dropdown-item" to='sortedBy/alphabetical'>Alphabetical</Link></li>
        <li><Link className="dropdown-item" to='sortedBy/relevance'>Relevance</Link></li>



        </ul>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Categories
        </a>
        <ul className="dropdown-menu">
        <li><Link className="dropdown-item" to='category/racing'>Racing</Link></li>
        <li><Link className="dropdown-item" to='category/sports'>Sports</Link></li>
          <li><Link className="dropdown-item" to='category/shooter'>Shooter</Link></li>
          <li><Link className="dropdown-item" to='category/action'>Action</Link></li>
          <li><Link className="dropdown-item" to='category/actionrbg'>Action RBG</Link></li>
          <li><Link className="dropdown-item" to='category/zombie'>Zombie</Link></li>
          <li><Link className="dropdown-item" to='category/fantasy'>Fantasy</Link></li>
          <li><Link className="dropdown-item" to='category/open-world'>Open World</Link></li>
          <li><Link className="dropdown-item" to='category/flight'>Flight</Link></li>
          <li><Link className="dropdown-item" to='category/battle-royal'>Battel Royal</Link></li>


        </ul>
      </li></> }
        
      </ul>
      

     <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
    
    {  localStorage.getItem('userToken') &&<>
    <li>
      <Link className="dropdown-item pe-4" to='search'>  <i className="fa-solid fa-magnifying-glass   fs-5 border border-info px-2 py-2  rounded-2"></i>  </Link>
      

      </li>
    <li className="nav-item">
           <Link className="rightNav nav-link" to='login'  onClick={logOut}>logout </Link>
         </li>
         </> }
        {!localStorage.getItem('userToken') &&
        <>
        <li className="nav-item">
        <Link className="rightNav nav-link" to="login">login</Link>
      </li>
      <li className="nav-item">
        <Link className="rightNav nav-link" to="register">register</Link>
      </li>
      </>
        }
     
      
      
      
        
           
         </ul>
 
  </div>
  </div>
</nav>
  </>
}
