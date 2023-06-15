import React, { useContext } from 'react'
import { GameContext } from '../../context/gamesContext.js'
import MediaItem from '../MeidaItem/MediaItem.jsx'

export default function Browser() {
        let{BrowserPlatformGames} =useContext(GameContext)
  return <>
  <div className="container mt-5">
      <div className="row mt-5">
          {BrowserPlatformGames.map((item,index)=><MediaItem key={index} item={item}/>)}
        </div>
      </div>
  </>
}
