import React from 'react'
import { Link } from 'react-router-dom'

export default function MediaItem({item}) {
  return <>
         <div className="col-md-3   mb-4">
         <Link style={{paddingLeft: 13, color:'#aaa' , textDecoration: 'none'}}  to={`/itemDetails/${item.id}`}>
         <div className="item    h-100">
            <img  className='w-100 rounded-3'  src={item.thumbnail}  alt="" />
            <div className="details  pt-3 px-2">
              <div className="line1 pb-3  d-flex align-items-center justify-content-between">
              <p className='fs-5  nameOfGame'>{item.title}</p>
              <p className='status'>free</p>
              </div>
              <p className='pb-3'>{item.short_description.split("").slice(0,20).join("")}... </p>
              <div className="iconOfGame  d-flex  justify-content-between">
                <div className="plusIcon">
                <i className="fa-solid fa-plus"></i>
                </div>
                <div className="  w-100 h-100  osIcon d-flex  justify-content-between w-50 ">
                  <p className='typeOfGame rounded-1   p-1 '>{item.genre}</p>
                
                  <i className="fa-brands fs-4  fa-windows"></i>
                </div>
            

              </div>
            </div>
            </div>
         </Link>
          </div>
  </>
}
