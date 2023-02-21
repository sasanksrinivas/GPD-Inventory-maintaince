import React, { useContext, useState } from 'react';
import { Link, useHistory, useNavigate } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import axios from "axios";
import Swal from 'sweetalert2';
import CryptoJS from 'crypto-js';
import useAuth from "../../UseAuth";
import BASE_URL from '../../Services/HttpCommon';

const AdminLogin = () => {
  const [email, setEmail] = useState();
  const [Password, setPassword] = useState();
  const navigate = useNavigate();
  const { setAuthed } = useContext(useAuth);

  const handleForm = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('code', email);
    data.append('password', Password);
    const options = {
      method: 'POST',
      url: BASE_URL+'/ams-api/user/login',
      data: data
    };
    axios.request(options).then(function (response) {
      console.log(response.data);
      if (response.data.result == 'true') {
        var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(response.data.user), 'token').toString();
        localStorage.setItem('token', ciphertext);
        setAuthed(response.data.user);
        navigate('/admin/dashboard');
      }
      else {
        Swal.fire({
          text: 'something went wrong',
          icon: 'error',
          confirmButtonText: 'ok'
        })
      }
    }).catch(function (error) {
      Swal.fire({
        text: 'something went wrong',
        icon: 'error',
        confirmButtonText: 'ok'
      })
      console.error(error);
    });
  }

  return (
    <div>
      <div className="d-flex align-items-center auth px-0" style={{ position: 'absolute', left: 0, top: 0, height: '100vh', width: '100vw', backgroundImage: 'url("/Images/auth/adminlogin.jpg")', backgroundRepeat: "no-repeat", backgroundSize: 'cover' }}>
        <div className="row w-100 mx-0">
          <div className="col-lg-4 mx-auto">
            <div className="card text-left py-5 px-4 px-sm-5 shadow" style={{ background: 'radial-gradient(black, transparent)' }}>
            <div className="brand-logo">
                            <img src='/logo.png' width={80} height={40} alt="logo" />
                            </div>
              <h5 className='text-white'>Login Admin</h5>
              {/* <h6 className="font-weight-light">Sign in to continue.</h6> */}
              <Form className="pt-3" onSubmit={handleForm}>
                <Form.Group className="d-flex search-field mb-3">
                  <Form.Control type="text" placeholder="Email" size="lg" className="h-auto"
                    onChange={(e) => setEmail(e.target.value)} required />
                </Form.Group>
                <Form.Group className="d-flex search-field">
                  <Form.Control type="password" placeholder="Password" size="lg" className="h-auto" onChange={(e) => setPassword(e.target.value)} required />
                </Form.Group>
                <div className="mt-3">
                  <button className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" >login</button>
                  {/* <button className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" onClick={(e) => varifyOtp(e)}></button> */}
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div >
    </div >
  )
}


export default AdminLogin