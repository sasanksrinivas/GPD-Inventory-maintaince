import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Layout from '../Layout/Layout';
import useAuth from '../UseAuth';
import axios from "axios";
import Swal from 'sweetalert2';
import CryptoJS from 'crypto-js';
import BASE_URL from '../Services/HttpCommon';

function Profile() {
    const navigate = useNavigate();
    const [isUpdate, setIsUpdate] = useState(false)
    const { authed, setAuthed } = useContext(useAuth);
    const [user, setUser] = useState({...authed,fName:authed.name.split(' ')[0],lName:authed.name.split(' ')[1],cPassword:authed.password});
    const access_token = localStorage.getItem('token');

    const update = (e) => {
        e.preventDefault();
        if(user.password === user.cPassword)
        {
            const options = {
                method: 'POST',
                url: BASE_URL+'/ams-api/user/updateUser',
                data: {
                    userId: user.userId,
                    name: user.fName+' '+user.lName,
                    code: user.code,
                    mobile: user.mobile,
                    role: 'STUDENT',
                    email: user.email,
                    password: user.password,
                    department:user.department,
                    dateOfRegistration: user.dateOfRegistration
                }
            };
    
            axios.request(options).then(function (response) {
                if(response.data.result=="true")
                {
                    var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(response.data.user),'token').toString();
                    localStorage.setItem('token',ciphertext);
                    setAuthed(response.data.user);
                    Swal.fire({
                        text:'Profile updated successfully!',
                        icon:'success',
                        confirmButtonText:'ok'
                    })
                }
                else{
                    Swal.fire({
                        text:'Something went wrong',
                        icon:'error',
                        confirmButtonText:'ok'
                    })
                }
            }).catch(function (error) {
                Swal.fire({
                    text:'Something went wrong',
                    icon:'error',
                    confirmButtonText:'ok'
                })
                console.error(error);
            });
        }
        else{
            Swal.fire({
                text:'Password don\'t match!',
                icon:'error',
                confirmButtonText:'ok'
            })
        }
    }

    useEffect(() => {
        if (!access_token) {
            navigate('/');
        }
    }, [])

    return (
        authed && <Layout>
            <div className="app-main__inner">
                {Boolean(!isUpdate) && <div className="card shadow">
                    <div className="card-header bg-white align-items-center justify-content-between">
                        <h6 className="mb-0">My account</h6>
                        <button className="btn btn-primary" onClick={() => setIsUpdate(true)} >Edit</button>
                    </div>
                    <div className="card-body">
                        <form>
                            <h6 className="heading-small text-muted mb-4">User information</h6>
                            <div className="pl-lg-4">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group focused">
                                            <label className="form-control-label" htmlFor="input-username">First Name</label>
                                            <input type="text" className="form-control form-control-alternative" placeholder="First Name" value={authed.name.split(' ')[0]} readOnly />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="form-control-label" htmlFor="input-email">Last Name</label>
                                            <input type="text" id="input-email" className="form-control form-control-alternative" placeholder="Last Name" value={authed.name.split(' ')[1]} readOnly />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group focused">
                                            <label className="form-control-label" htmlFor="input-first-name">User ID</label>
                                            <input type="text" id="input-first-name" className="form-control form-control-alternative" placeholder="User ID" value={authed.code} readOnly />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group focused">
                                            <label className="form-control-label" htmlFor="input-last-name">Department</label>
                                            <input type="text" id="input-last-name" className="form-control form-control-alternative" placeholder="Department" value={authed.department} spellCheck="false" data-ms-editor="true" readOnly />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>}
                {Boolean(isUpdate) && <div className="card shadow">
                    <div className="card-header bg-white align-items-center justify-content-between">
                        <h6 className="mb-0">My account</h6>
                        <button className="btn btn-primary" onClick={() => setIsUpdate(true)} >Edit</button>
                    </div>
                    <div className="card-body">
                        <form onSubmit={update}>
                            <h6 className="heading-small text-muted mb-4">Update Account</h6>
                            <div className="pl-lg-4">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group focused">
                                            <label className="form-control-label" htmlFor="input-username">First Name</label>
                                            <input type="text" className="form-control form-control-alternative" placeholder="First Name" value={user.fName} onChange={(e)=>(setUser({...user,fName:e.target.value}))} required />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="form-control-label" htmlFor="input-email">Last Name</label>
                                            <input type="text" className="form-control form-control-alternative" placeholder="Last Name" value={user.lName} onChange={(e)=>(setUser({...user,lName:e.target.value}))} required />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    {/* <div className="col-lg-6">
                                        <div className="form-group focused">
                                            <label className="form-control-label" htmlFor="input-first-name">User ID</label>
                                            <input type="text" className="form-control form-control-alternative" placeholder="User ID" value={user.code} onChange={(e)=>(setUser({...user,code:e.target.value}))} required />
                                        </div>
                                    </div> */}
                                    <div className="col-lg-6">
                                            <div className="form-group">
                                            <label className="form-control-label" htmlFor="input-last-name">Department</label>
                                            <select className="form-control" onChange={(e)=>(setUser({...user,department:e.target.value}))} style={{ outline: 'none', border: '1px solid #ced4da' }} value={user.department} required>
                                                <option value="">Select Department</option>
                                                <option value={'ACS'}>ACS</option>
                                                <option value={'IS'}>IS</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group focused">
                                            <label className="form-control-label" htmlFor="input-first-name">Password</label>
                                            <input type="text" className="form-control form-control-alternative" placeholder="Password" value={user.password} onChange={(e)=>(setUser({...user,password:e.target.value}))} required />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    
                                    <div className="col-lg-6">
                                        <div className="form-group focused">
                                            <label className="form-control-label" htmlFor="input-last-name">Confirm Password</label>
                                            <input type="text" className="form-control form-control-alternative" placeholder="Confirm Password" value={user.cPassword} onChange={(e)=>(setUser({...user,cPassword:e.target.value}))} required />
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer justify-content-end px-3">
                                    <button className="btn btn-success">Update</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>}
            </div>
        </Layout>
    )
}

export default Profile