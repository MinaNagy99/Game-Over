import React, { useContext } from 'react'
import MediaItem from '../MeidaItem/MediaItem.jsx';
import { GameContext } from '../../context/gamesContext.js';

export default function Home() {


  let {allGames} =useContext(GameContext)


  return <>
  
    <div className="container mt-5">
      <div className="row mt-5">
          {allGames.map((item,index)=><MediaItem key={index} item={item}/>)}
        </div>
      </div>
    
  </>
}
