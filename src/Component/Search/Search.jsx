import React, { useContext, useEffect, useState } from 'react'
import MediaItem from '../MeidaItem/MediaItem.jsx';
import { GameContext } from '../../context/gamesContext.js';

export default function Search() {


  let {allGames} =useContext(GameContext)
  const [tearm, settearm] = useState('')

   function getTearm(e) {
        settearm(e.target.value)
    }


 
  

  return <>
 
          
        <div className="container mt-5">

            <div className="row search ">
                <div className="border-bottom pb-2 d-flex justify-content-start align-item-center ">
                <i className="fa-solid fa-magnifying-glass pe-3 pt-2  fs-1"></i> 
                <p className='fs-1'>find the game</p>
                </div>
                <div className="row pt-5">
                    <input onChange={getTearm} type="text" placeholder='search the game' className='form-control bg-dark border text-white  border-dark fs-4 ps-3 ' />
                </div>
            </div>
            {tearm.length==''&&
                 <div className="container mt-5">

             <div className="row mt-5">
                 {allGames.map((item,index)=><MediaItem key={index} item={item}/>)}
               </div>
               </div>
            }
               <div className="container mt-5">
         <div className="row mt-5">
            {
                tearm.length>=1&&
                allGames.map((elm,index)=>
                elm.title.toLowerCase().startsWith(tearm.toLowerCase())&&
                   
   
  
           <>
             {<MediaItem key={index} item={elm}/>}
             </>
                    )


            }
              </div>
         </div> 
            


        </div>
  

      
    
  </>
}
