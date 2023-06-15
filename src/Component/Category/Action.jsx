import React, { useContext } from 'react'
import { GameContext } from '../../context/gamesContext.js'
import MediaItem from '../MeidaItem/MediaItem.jsx'

export default function Action() {
        let{ActionGames} =useContext(GameContext)
  return <>
  <div className="container mt-5">
      <div className="row mt-5">
          {ActionGames.map((item,index)=><MediaItem key={index} item={item}/>)}
        </div>
      </div>
  </>
}
