import React from 'react'
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <div>
      <div className="d-flex align-items-center auth px-0" style={{ position: 'absolute', left: 0, top: 0, height: '100vh', width: '100vw', backgroundImage: 'linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.2)),url("https://res.cloudinary.com/dpny4vmnc/image/upload/v1676852905/IMG-6687_ghpsso.jpg
")', backgroundRepeat: "no-repeat", backgroundSize: 'cover' }}>
        <div className="row w-100 mx-0" style={{ position:'absolute',top:'24%' }}>
          <div className="mx-auto">
            <div className="card text-left px-4 px-sm-5 shadow-none" style={{ background: 'transparent' }} >

                <h2 className='font-weight-bold text-uppercase' style={{ color:'black' }}>login/admin login page</h2>
                <h6 className='text-uppercase mt-5 text-center' style={{ color:'black',fontWeight:'500' }}>Join Us Now And Don't Waste Time</h6>
                <div className="row mx-auto my-4">
                    <Link to="/login" className="btn rounded-0 font-weight-bold px-3 mr-3" style={{ background:'black',color:'white' }}>Login</Link>
                    <Link to="/adminlogin" className="btn rounded-0 font-weight-bold px-3 ml-3" style={{ background:'black',color:'white' }} >Admin Login</Link>
                </div>
            </div>
          </div>
        </div>
      </div >
    </div >
  )
}

export default Landing
