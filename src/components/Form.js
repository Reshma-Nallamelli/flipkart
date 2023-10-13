import React from 'react'
import axios from 'axios'
import { useState } from 'react'

export default function Form() {
    const[id,setId]=useState('')
    const[title,setTitle]=useState('')
    const[brand,setBrand]=useState('')
    const[price,setPrice]=useState('')
    const[des,setDes]=useState('')
    const[img,setImg]=useState('')
    const[productsList,setProductList]=useState([{}])
    
  const fetchData =()=>{
    axios.get('http://localhost:3002/products')
    .then((res)=>setProductList(res.data))
  }
    const productData={
        productId:id,
        title:title,
        brand:brand,
        price:price,
        description:des,
        thumbnail:img
    }
    const handleSubmit=(e)=>{
          e.preventDefault();
        axios.post('http://localhost:3002/products',productData)
        .then((res)=>{
            alert("Success")
            setId('')
            setTitle('')
            setBrand('')
            setPrice('')
            setDes('')
            setImg('')
        })
    }
    const handleDelete=(id)=>{
      axios.delete('http://localhost:3002/products/$(id)')
      .then((res)=>{
        alert("Product Deleted")
        fetchData()
      })
    }
    const handleEdit=(editData)=>{
      setId(editData.productId)
      setTitle(editData.title)
      setBrand(editData.brand)
      setPrice(editData.price)
      setDes(editData.description)
      setImg(editData.thumbnail)
      setId(editData.id)
    }
    useState(()=>{
      fetchData()
    },0)
  return (
    <>
    <div className='row justify-content-center'>
        <div className='col-md-6 img-thumbnail'>
            <h3 className='text-center text-primary'>add product</h3>
            <form method='post' onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label>Product id</label>
                    <input type='text' className='form-control' placeholder='enter product id' 
                     onChange={ (e)=>{setId(e.target.value)} }/>
                </div>
                <div className='mb-3'>
                    <label>Product Title</label>
                    <input type='text' className='form-control' placeholder='enter product title'
                      onChange={(e)=>{setTitle(e.target.value)}}/>
                </div>
                <div className='mb-3'>
                    <label>Brand</label>
                    <input type='text' className='form-control' placeholder='enter Brand'
                      onChange={(e)=>{ setBrand(e.target.value)}}/>
                </div>
                <div className='mb-3'>
                    <label>Price</label>
                    <input type='text' className='form-control' placeholder='enter price'
                      onChange={(e)=>{setPrice(e.target.value)}}/>
                </div>
                <div className='mb-3'>
                    <label>Description </label>
                    <textarea type='text' className='form-control' placeholder=''
                    onChange={(e)=>{setDes(e.target.value)}}>
                    </textarea>
                </div>
                <div className='mb-3'>
                    <label>img</label>
                    <input type='url' className='form-control' placeholder='enter image url'
                      onChange={(e)=>{setImg(e.target.value)}}/>
                </div>
                <div className='mb-3'>
                  <button>submit</button>
                </div>
            </form>
        </div>
    </div>
    {
      productsList.map((e,i)=>{
        return(
          <>
          <table className='table table-hover table-striped table-bordered'>
               <thead>
                   <tr>
                    
                   <th>product Id</th>
                   <th>Product Title</th>
                   <th>Brand</th>
                   <th>Price</th>
                   <th>Description</th>
                   <th>img</th>
                   <th>Actions</th>
                   </tr>
               </thead>
               <tbody>
                  {
                    productsList.map((e,i)=>{
                      return(
                        <>
                        <tr>
                        <td>{ e.productId}</td>
                        <td>{ e.title}</td>
                        <td>{e.brand}</td>
                        <td>{e.price}</td>
                        <td>{e.description}</td>
                        <td>{<img src={e.thumbnail} />}</td>
                        <td><button className='btn btn-primary' onClick={()=>handleEdit(e)}><i className='fa fa-edit'></i></button>
                        <button className='btn btn-danger' onClick={()=>handleDelete(e.id)}><i className='fa fa-trash'></i></button>
                        </td>
                        </tr>
                        </>
                      )
                    })
                  }
               </tbody>
          </table>
          </>
        )
      })
    }
    </>
  )
}
