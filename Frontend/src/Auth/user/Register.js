import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import Swal from 'sweetalert2';
import UseAuth from '../../UseAuth';
import CryptoJS from 'crypto-js';
import BASE_URL from '../../Services/HttpCommon';

const Register = () => {
    const navigate = useNavigate();
    const [fName, setfName] = useState('')
    const [lName, setlName] = useState('')
    const [ID, setID] = useState('')
    const [phone, setPhone] = useState('');
    const [Password, setPassword] = useState('')
    const [cPassword, setcPassword] = useState('')
    const [depatment, setDepatment] = useState('');
    const { setAuthed } = useContext(UseAuth);
    const handleID = (e) => {
        const value = e.target.value;
        const result = /^(s|S)|[a-z0-9_-]{3,100}$/.test(value);
        setID(value)
        if (result)
            setID(value)
        else
            setID('')
    }

    const Register = (e) => {
        e.preventDefault();
        if(Password==cPassword)
        {
            const options = {
                method: 'POST',
                url: BASE_URL+'/ams-api/user/newUser',
                data: {
                    name: fName+' '+lName,
                    mobile: phone,
                    code: ID,
                    role: 'STUDENT',
                    email: "yash@gmail.com",
                    password: Password,
                    department:depatment
                }
            };
            axios.request(options).then(function (response) {
                console.log(response.data);
                if(response.data.result=='true')
                {
                    var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(response.data.user),'token').toString();
                    localStorage.setItem('token',ciphertext);
                    setAuthed(response.data.user);
                    navigate('/student/dashboard');
                }
                else
                {
                    Swal.fire({
                        text:'something went wrong',
                        icon:'error',
                        confirmButtonText:'ok'
                    })
                }
        
            }).catch(function (error) {
                console.error(error);
            });
        }
        else{
            Swal.fire({
                icon:'error',
                text:'Password does not match',
                confirmButtonText:'ok'
            })
        }
    }


    return (
        <div>
            <div className="d-flex align-items-center auth px-0 h-100" style={{ position: 'absolute', left: 0, top: 0, height: '100vh', width: '100vw', backgroundImage: 'url("/Images/auth/user-signup.webp")', backgroundRepeat: "no-repeat", backgroundSize: 'cover' }}>
                <div className="row w-100 mx-0">
                    <div className="col-lg-8 mx-auto">
                        <div className="card text-left py-5 px-4 px-sm-5 shadow" style={{ background: 'radial-gradient(black, transparent)' }} >
                            <div className="brand-logo">
                            <img src='/logo.png' width={80} height={40} alt="logo" />
                            </div>
                            <h4 className='text-white'>New here?</h4>
                            <h6 className="font-weight-light text-white">Signing up is easy. It only takes a few steps</h6>
                            <form className="pt-3" onSubmit={Register}>
                                <div className='row'>
                                    <div className='col-lg-6'>
                                        <div className="form-group">
                                            <input type="text" value={fName} className="form-control form-control-lg" id="exampleInputUsername1" placeholder="First Name" required
                                                onChange={(e) => setfName(e.target.value)}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" value={lName} className="form-control form-control-lg" id="exampleInputUsername1" placeholder="Last Name" required
                                                onChange={(e) => setlName(e.target.value)}
                                            />
                                        </div>
                                        
                                        <div className="form-group">
                                            <input type="text" className="form-control form-control-lg" id="exampleInputEmail1" placeholder="User ID"
                                                value={ID} onChange={handleID}
                                            />
                                        </div>
                                        <div className="form-group">
                                            {/* <label htmlFor="" className='font-weight-light text-white'></label> */}
                                            <select className="form-control form-control-lg" onChange={(e)=>(setDepatment(e.target.value))} style={{ outline: 'none', border: '1px solid #ced4da' }} required>
                                                <option value="">Select Department</option>
                                                <option value={'ACS'}>ACS</option>
                                                <option value={'IS'}>IS</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className='col-lg-6'>
                                        <div className="form-group">
                                            <input type="number" value={phone} className="form-control form-control-lg" id="exampleInputUsername1" placeholder="Enter Phone" required
                                                onChange={(e) => setPhone(e.target.value)}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input type="password" className="form-control form-control-lg" id="exampleInputPassword1" placeholder="Password" required
                                                onChange={(e) => setPassword(e.target.value)} />
                                        </div>
                                        <div className="form-group">
                                            <input type="password" value={cPassword} className="form-control form-control-lg" id="exampleInputPassword1" placeholder="Confirm Password" required
                                                onChange={(e) => setcPassword(e.target.value)} />
                                        </div>
                                        
                                        <div className="mt-3">
                                            <button type='submit' className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn">SIGN UP</button>
                                        </div>
                                        <div className="text-center mt-4 font-weight-light text-white">
                                            Already have an account? <Link to="/login" className="text-white">Login</Link>
                                        </div>
                                    </div>

                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
