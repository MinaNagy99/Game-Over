import React, { useContext } from 'react'
import { GameContext } from '../../context/gamesContext.js'
import MediaItem from '../MeidaItem/MediaItem.jsx'

export default function Alphabetical() {
        let{AlphabeticalGames} =useContext(GameContext)
  return <>
  <div className="container mt-5">
      <div className="row mt-5">
          {AlphabeticalGames.map((item,index)=><MediaItem key={index} item={item}/>)}
        </div>
      </div>
  </>
}
