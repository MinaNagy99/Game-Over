import React, { useContext } from 'react'
import { GameContext } from '../../context/gamesContext.js'
import MediaItem from '../MeidaItem/MediaItem.jsx'

export default function OpenWorld() {
        let{OpenWorldGames} =useContext(GameContext)
  return <>
  <div className="container mt-5">
      <div className="row mt-5">
          {OpenWorldGames.map((item,index)=><MediaItem key={index} item={item}/>)}
        </div>
      </div>
  </>
}