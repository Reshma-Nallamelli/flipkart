import React from 'react'
import alert1 from './alert1.jpeg'
import alert2 from './alert2.jpeg'
import alert3 from './alert3.jpeg'
import alert4 from './alert4.jpeg'
import alert5 from './alert5.jpeg'
import alert6 from './alert6.jpeg'
import abc from './abc.jpeg'


export default function Sidebar() {
  return (
 <>
  
  <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={alert1} class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src={alert2} class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src={alert3} class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item active">
      <img src={alert4} class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src={alert5} class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src={alert6} class="d-block w-100" alt="..." />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        
    <img src={abc}/>
   
  </>
  )
}