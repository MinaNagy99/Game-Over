import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'


export default function ItemDetails() {
  let {id}=useParams()
  const [spacificGame,setSpacificGame] = useState({})
  async function getSpacificGame(id) {

    const options = {
      method: 'GET',
      url: 'https://free-to-play-games-database.p.rapidapi.com/api/game',
      params: {id: `${id}`},
      headers: {
        'X-RapidAPI-Key': 'fb44ef1ac6msh5962567eaff3a06p14b05cjsn2bdc82c54652',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }
    };
    
    try {
      const response = await axios.request(options);
      setSpacificGame(response.data)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getSpacificGame(id)
  }, [])
  
  return <>
  
  <div style={{
  backgroundPosition:'top center',
  backgroundRepeat:'no-repeat',
  backgroundSize:'100% 100%',
  height:'50vh',
  opacity:'0.1',
  zIndex:-1,
  backgroundImage: `url(${spacificGame.thumbnail})`,
  boxShadow:'10px 10px 5px 0px rgba(0,0,0,0.75)'



  
  }}
  className=" position-absolute h-100 w-100">
  </div>
    <div className="container item mt-5">
        <div className="row mt-5 ">
            <div className="col-md-4 item  mt-5">
                <div className="part1">{console.log(spacificGame)}
                     <img  className='w-100 rounded-3' src={spacificGame.thumbnail} alt="" />
                     <div className="lineOfStatusAndLine">
                        <div className="row p-3">
                            <div className="col-3 d-flex  justify-content-center align-items-center ">
                                <div className="rounded-2 bg-dark   free">
                                <p className='  '>{spacificGame.status}</p>

                                </div>
                            </div>
                            <div className="playNow  py-1 col-9 rounded-2">
                            <a href={spacificGame.freetogame_profile_url} className='d-flex fs-5 '  target="_blank" >

                                <p className='p-0 m-0 '>play now</p>
                                <i className="p-0 m-0 ps-1 pt-2  fa-solid fa-right-to-bracket"></i>
                                </a> </div>
                        </div>
                
                    
                     </div>
                     <div className="row mt-4  p-2 bg-dark rounded-4   ">
                        <div className="col-3 ">
                            <div className="d-flex flex-column align-items-center ">
                        <i className="py-1 fs-5 fa-regular fa-face-smile text-success"></i>
                        <p className='py-1'>{Math.floor(Math.random() * 200)}</p>
                        <p className='py-1'>like</p>
                        </div>
                        </div>
                        <div className="col-3 ">
                            <div className="d-flex flex-column align-items-center ">
                        <i className="py-1 fs-5 fa-regular fa-face-meh text-secondry"></i>
                        <p className='py-1'>{Math.floor(Math.random() * 10)}</p>
                        <p className='py-1'>muh</p>
                        </div>
                        </div>
                        <div className="col-3 ">
                            <div className="d-flex flex-column align-items-center ">
                        <i className="py-1 fs-5 fa-regular fa-face-frown text-danger"></i>
                        <p className='py-1'>{Math.floor(Math.random() * 30)}</p>
                        <p className='py-1'>unlike</p>
                        </div>
                        </div>
                        <div className="col-3 ">
                            <div className="d-flex flex-column align-items-center ">
                        <i className="py-1  fa-regular bg-border-color fa-plus border border-1 border-info   text-info"></i>
                        <p className='py-1'>{Math.floor(Math.random() * 100)}</p>
                        <p className='py-1'>Add</p>
                        </div>
                        </div>
                        
                     </div>
                </div>
            </div>
            <div className="col-1"></div>
            <div className="col-md-7 mt-5">
                <div className="part2">
                    <p className='h1 fs-1 fw-bolder'>{spacificGame.title}</p>
                    <br />
                    <p className='fs-3  '>about <span>{spacificGame.title}</span></p>
                    <p>{spacificGame.short_description}</p>
                    <br />
                    <p className='mb-1'> <span className='fw-bolder'>genre</span> <span> : {spacificGame.genre}</span></p>
                    <p className='mb-1'> <span className='fw-bolder'>developer</span> <span> : {spacificGame.developer}</span></p>
                    <p className='mb-1'> <span className='fw-bolder'>platform</span> <span> : {spacificGame.platform}</span></p>
                    <p className='mb-1'> <span className='fw-bolder'>release_date</span> <span> : {spacificGame.release_date}</span></p>
                    <p className='mb-1'> <span className='fw-bolder'>status</span> <span> : {spacificGame.status}</span></p>
                    <p className='mb-1'> <span className='fw-bolder'>game_url</span> <Link className='fontColor' to={spacificGame.freetogame_profile_url} target="_blank"> <span> : {spacificGame.game_url}</span></Link></p>


                    





                    {spacificGame.minimum_system_requirements&&

                    <p className='fs-3' >minemum siting requird</p>}
                    {spacificGame.minimum_system_requirements&&
                    <p className='py-1' > <span className='fw-bolder '>graphics</span> : {spacificGame.minimum_system_requirements.graphics}</p>}
                    {spacificGame.minimum_system_requirements&&
                    <p className='py-1'> <span className='fw-bolder'>memory</span> : {spacificGame.minimum_system_requirements.memory}</p>}
                    {spacificGame.minimum_system_requirements&&
                    <p className='py-1'> <span className='fw-bolder'>os</span> : {spacificGame.minimum_system_requirements.os}</p>}
                    {spacificGame.minimum_system_requirements&&
                    <p className='py-1'> <span className='fw-bolder'>processor</span> : {spacificGame.minimum_system_requirements.processor}</p>}
                    {spacificGame.minimum_system_requirements&&
                    <p className='py-1'> <span className='fw-bolder'>storage</span> : {spacificGame.minimum_system_requirements.storage}</p>}
                
                </div>

                <br />
                <br />


            </div>
        </div>
        {spacificGame.screenshots&&
        <div className="row mt-3">
          <div className="col-2"></div>
          <div className="col-md-8 align-self-center">
          { <div id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
      {spacificGame.screenshots&&
    <div className="carousel-item active" data-bs-interval="1000" >
      <img  src={spacificGame.screenshots[0].image} className="rounded-3  d-block w-100" alt="..."/>
    </div>}
    {spacificGame.screenshots&&
    <div className="carousel-item" data-bs-interval="1000">
      <img  src={spacificGame.screenshots[1].image} className="d-block w-100" alt="..."/>
    </div>}
    {spacificGame.screenshots&&
    <div className="carousel-item">
      <img src={spacificGame.screenshots[2].image} className="d-block w-100" alt="..."/>
    </div>}
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div> }


          </div>
        </div>}
       
    </div>
  
  </>
}
