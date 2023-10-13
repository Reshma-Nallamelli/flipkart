 import React from 'react'
 import logo from './flipkart.jpeg'
import a from './top.jpeg'
import b from './mob.jpeg'
import c from './ele.jpeg'
import d from './tv.jpeg'
import e from './fashion.jpeg'

import f from './beauty.jpeg'
import g from './home.jpeg'
import h from './fur.jpeg'
import i from './flight.jpeg'
import j from './grocery.jpeg'


export default function Searchbar() {
  return (
    <>
    <div className='col-md-12' >
      <div className='my-class'>
        <img src={logo} width="100px" style={{marginRight:'10px'}}/>
        <i class="fa-solid fa-magnifying-glass" ></i>
        <input type='text' className='searchbox ' placeholder='search for products,brands and more' style={{width: '550px',marginLeft:'5px'}} />
        <i style={{marginLeft:'80px'}} class="fa-solid fa-store"></i>   Become a seller
        <i style={{marginLeft:'80px'}} class="fa-regular fa-user"></i>  Sign in 
        <i style={{marginLeft:'80px'}} class="fa-solid fa-cart-shopping"></i>  cart
        <i style={{marginLeft:'60px'}} class="fa-solid fa-ellipsis-vertical"></i>
      </div><hr></hr>
    <div className='row-menu row justify-content-center'>
      <div className='col-md-1 text-center'>
        <img src={a} width='40px'  />
        <p>Top offers</p>
      </div>
      <div className='col-md-1 text-center'>
        <img src={b} width='40px' />
        <p>Mobiles</p>
      </div>
      <div className='col-md-1 text-center'>
        <img src={c} width='40px' />
        <p>Electronics</p>
      </div>
      <div className='col-md-1 text-center'>
        <img src={d} width='40px' />
        <p>Appliances</p>
      </div>
      <div className='col-md-1 text-center'>
        <img src={e} width='40px' />
        <p>Fashion</p>
      </div>
      <div className='col-md-1 text-center'>
        <img src={f} width='40px' />
        <p>Beauty</p>
      </div>
      <div className='col-md-1 text-center'>
        <img src={g} width='40px'  />
        <p>Home</p>
      </div>
      <div className='col-md-1 text-center'>
        <img src={h} width='40px'  />
        <p>Furniture</p>
      </div>
      <div className='col-md-1 text-center'>
        <img src={i} width='40px' />
        <p>Flights</p>
      </div>
      <div className='col-md-1 text-center'>
        <img src={j} width='40px'/>
        <p>Grocery</p>
      </div>
    </div><hr></hr>    
  </div>
  </>
  )
}