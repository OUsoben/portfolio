import React from 'react'
import { useNavigate } from 'react-router-dom'
const NotFoundPage = () => {
  
  const navigate = useNavigate()
  
  return (
    
    <>
      <section className='d-flex mt-5 justify-content-center'>
        <img className='img-fluid' src="https://img.freepik.com/free-vector/404-error-lost-space-concept-illustration_114360-7901.jpg?size=626&ext=jpg&ga=GA1.1.1401702421.1699262363&semt=ais" alt="" />
        </section>    
        <div className="text-center pt-5">
          <button className='btn btn-success' onClick={()=>{
            navigate("/")
          }}>Back to Home</button>
        </div>
    
    </>
  )
}

export default NotFoundPage