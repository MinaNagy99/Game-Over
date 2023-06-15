import React from 'react'
import $ from 'jquery';

export default function BtnUp() {

   
    function up() {
        $("html,body").animate({scrollTop:0})
    }
    window.addEventListener('scroll', (event) => {
        if ($(window).scrollTop()>1500) {
            $('.myButton').fadeIn(1000)
        }  if ($(window).scrollTop()<1500) {
            $('.myButton').fadeOut(1000)
        }
         
    })
  return <>
  <button onClick={up} id='btnUp' className='myButton'><i className="fa-solid fa-arrow-up fa-bounce"></i></button>

  
  </>
}
